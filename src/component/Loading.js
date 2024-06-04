// Loading.js
import React from 'react';
import "../css/Loading.css"
import Spinner from '../assets/Spinner.gif';

export const Loading = () => {
  return (
    <div id='background'>
        <div id="loadingtext">잠시만 기다려 주세요.</div>
        <img src={Spinner} alt="로딩중" width="5%" />
    </div>
    );
};

export default Loading;
