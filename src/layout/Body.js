import React from 'react';
import {Link} from 'react-router-dom';
import App from '../App';
import '../css/Body.css';

const Body = () => {
  return (
    <div className='content'>
        <div className='left'></div>
        <App></App>
        <div className='right'></div>
    </div>
  );
};

export default Body;