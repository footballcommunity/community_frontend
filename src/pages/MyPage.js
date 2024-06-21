/* BoardList.js */
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import useAsync from '../hooks/useAsync';
import getUserInfo from '../api/getUserInfo';
import updateAcessToken from "../api/updateAccessToken";
import Cookies from 'js-cookie';
import Loading from '../component/Loading.js';
import { Error } from '../component/Error.js';
import "../css/MyPage.css"

const MyPage = () => {
  
  const [state, refetch] = useAsync(getUserInfo,[],{});
  const {loading, data, error} = state;
  
  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    window.location.reload();
  }
  const dateFormat = (str) => {
    let format = (str||"").split("T")
    return format[0] + " " + (format[1]||"").split(".")[0]
  }

  if (loading) return <Loading></Loading>;
  if (error | !data) return <Error></Error>

  return (
    <div id="user_info_wrapper">
      <div id="info_title">나의 정보</div>
        <div className='info_container'>
        <div className='info_key'>이메일</div> 
        <div className='info_value'>{data.email}</div>
      </div>
      <div className='info_container'>
        <div className='info_key'>이름</div>
        <div className='info_value'>{data.username}</div>
        <button className='info_value'>변경</button>
      </div>
        <div className='info_container'>
          <div className='info_key'>비밀번호</div>
          <div className='info_value'>*****</div>
          <button className='info_value'>변경</button>
        </div>
        <div className='info_container'>
          <div className='info_key'>생성날짜</div>
          <div className='info_value'>{dateFormat(data.dateCreated)}</div>
        </div>
        <div className='info_container'>
          <button onClick={logout}>로그아웃</button>
        </div>
      </div>
  );
}

export default MyPage;