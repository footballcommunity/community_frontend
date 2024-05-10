/* BoardList.js */
import React, {useEffect, useState} from 'react';
import getUserInfo from '../api/getUserInfo';
import "../css/MyPage.css"

const MyPage = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [dateCreated, setDateCreated] = useState();
  const [status, setStatus] = useState();
  const [role, setRole] = useState();
  
  const fetchUserInfo = async () => {
    try {
      const res = await getUserInfo();
      console.log(res)
      setEmail(res.email)
      setUsername(res.username)
      setDateCreated(res.dateCreated)
      setStatus(res.setStatus)
      setRole(res.setRole)
    } catch (error) {
      console.log(error) 
    }
  }
  useEffect(()=>{
    fetchUserInfo();
  }, []);

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
          <div className='info_value'>{dateCreated}</div>
        </div>
    </div>
  );
};

export default MyPage;