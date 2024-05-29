import './App.css';
import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";
import Signin from './routes/Signin';
import ArticleDetails from './routes/ArticleDetails';
import MyPage from './routes/MyPage';
import ErrorPage from './component/ErrorPage';
import Cookies from 'js-cookie';

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/board" element={<BoardList/>}/>
        <Route path="/board/:boardId" element={<BoardList/>}/>
        <Route path="/board/search" element={<BoardList/>}  errorElement={<ErrorPage/>} />
        <Route path="/board/:boardId/search" element={<BoardList/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path='/article/:articleId' element={<ArticleDetails/>}/>
      </Routes>
  );
}

export default App;
