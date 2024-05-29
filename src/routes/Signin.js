import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import '../css/Signin.css'
import signin from '../api/signin';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  
  const saveEmail = event => {
    setEmail(event.target.value);
  };
    
  const savePw = event => {
    setPw(event.target.value);
  };

  const handleSignin = async () => {
    let isSuccess = false;
    isSuccess = await signin({email, pw});
    if(isSuccess){
      window.location.reload();
    }
    else{
      window.confirm("로그인에 실패했습니다.");
    }
  };
  
  useEffect(() => {
    let accessToken = Cookies.get('accessToken');
    console.log(accessToken);
    if(accessToken !== undefined){
      navigate("/board");
    }
  }, []);
  
  return (
<div className="section">
    <h4 className="mb-4 pb-3">Log In</h4>
    <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" onChange={saveEmail}></input>
    <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" onChange={savePw}></input>
    <button className="btn" onClick={handleSignin}>submit</button>
    <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
</div>
  );
};

export default Signin;