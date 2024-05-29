import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/Signin.css'
import signin from '../api/signin';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();
    const saveEmail = event => {
      setEmail(event.target.value);
     };
    const savePw = event => {
      setPw(event.target.value);
    };
    const handleSignin = () => {
      signin({email, pw});
      navigate("/board");
      window.location.reload();
    };
  return (
<div class="section">
    <h4 class="mb-4 pb-3">Log In</h4>
    <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" onChange={saveEmail}></input>
    <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" onChange={savePw}></input>
    <btn class="btn" onClick={handleSignin}>submit</btn>
    <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
</div>
  );
};

export default Signin;