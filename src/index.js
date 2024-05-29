import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {BrowserRouter} from "react-router-dom";
import Body from './layout/Body';
import Cookies from 'js-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Header/>
    <Body/>
    <Footer/>
  </BrowserRouter>
);

