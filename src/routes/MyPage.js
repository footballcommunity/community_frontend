/* BoardList.js */
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import getUserInfo from '../api/getUserInfo';
import updateAcessToken from "../api/updateAccessToken";
import Cookies from 'js-cookie';
import "../css/MyPage.css"

const MyPage = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [dateCreated, setDateCreated] = useState();
  const [status, setStatus] = useState();
  const [role, setRole] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    window.location.reload();
  }
  const dateFormat = (str) => {
    let format = (str||"").split("T")
    return format[0] + " " + (format[1]||"").split(".")[0]
  }

  const fetchUserInfo = async () => {
      const res = await getUserInfo();
      if(res.status === 200){
        setEmail(res.data.email)
        setUsername(res.data.username)
        setDateCreated(res.data.dateCreated)
        setStatus(res.data.setStatus)
        setRole(res.data.setRole)
        setIsSuccess(true)
      } else {
        if(res.status === "4105"){
          // refreshToken으로 재요청
          const updateRes = await updateAcessToken();
          console.log(updateRes)
          if(updateRes.status === "200"){
            // accessToken 저장
            Cookies.set("accessToken", updateRes.data.accessToken)
            setIsSuccess(true)
          } else{
            // 로그아웃 처리
            logout();
            setIsSuccess(false)
          }
        }
      }
  }  

  useEffect(()=>{
    fetchUserInfo();
  }, []);

  console.log(isSuccess)
  if(isSuccess){
    return (
      <div id="user_info_wrapper">
        <div id="info_title">나의 정보</div>
          <div className='info_container'>
            <div className='info_key'>이메일</div> 
            <div className='info_value'>{email}</div>
          </div>
          <div className='info_container'>
            <div className='info_key'>이름</div>
            <div className='info_value'>{username}</div>
            <button className='info_value'>변경</button>
          </div>
          <div className='info_container'>
            <div className='info_key'>비밀번호</div>
            <div className='info_value'>*****</div>
            <button className='info_value'>변경</button>
          </div>
          <div className='info_container'>
            <div className='info_key'>생성날짜</div>
            <div className='info_value'>{dateFormat(dateCreated)}</div>
          </div>
          <div className='info_container'>
            <button onClick={logout}>로그아웃</button>
          </div>
      </div>
  );
} else{
  return (
    <div>로그인이 필요합니다</div>
  )
}

}

export default MyPage;