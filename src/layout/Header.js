/* Header.js */
import React from 'react';
import {Link} from "react-router-dom";
import '../css/Header.css'
import Cookies from 'js-cookie';

const Header = () => {
  const accessToken = Cookies.get("accessToken");
  console.log({accessToken})
  let isLoggedIn = undefined;
  let navList = []
  if(accessToken === undefined){
    isLoggedIn = false;
  } else {
    isLoggedIn = true;
  }

  if(isLoggedIn){
    navList = [{"to":"/","name":"용병 게시판"},{"to":"/board","name":"게시판"},{"to":"/mypage","name":"마이페이지"}]
  } else{
    navList = [{"to":"/","name":"용병 게시판"},{"to":"/board","name":"게시판"},{"to":"/signin","name":"로그인"}]
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