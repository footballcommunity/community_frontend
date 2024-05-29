/* Header.js */
import React,{useState} from 'react';
import {Link} from "react-router-dom";
import '../css/Header.css'
import Cookies from 'js-cookie';

const Header = () => {
  const [accessToken, setAccessToken] = useState(Cookies.get("accessToken"));
  let isLoggedIn;
  console.log({accessToken})
  let navList = []
  if(accessToken === undefined){
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
  }

  if(isLoggedIn){
    navList = [{"to":"/","name":"홈"},{"to":"/board?page=1","name":"게시판"},{"to":"/mypage","name":"마이페이지"}]
  } else{
    navList = [{"to":"/","name":"홈"},{"to":"/board?page=1","name":"게시판"},{"to":"/signin","name":"로그인"}]
  }
  return (
    <header className='head'>
        <nav>
          <div></div>
          <div className='linkContainer'>
            {navList.map(e => {
              return <Link key={e.name} className='nav' to={e.to}>{e.name}</Link>
            })}
          </div>
          <div></div>
        </nav>
        <div className='title'>게시판</div>
    </header>
  );
};

export default Header;