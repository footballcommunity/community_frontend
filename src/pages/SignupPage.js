import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../css/Signin.css";
import Loading from "../component/Loading";
import { signup } from "../api/user.js";
import { UserContext } from "../UserContext.js";

const SignupPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveEmail = (event) => {
    setEmail(event.target.value);
  };
  const saveUsername = (event) => {
    setUsername(event.target.value);
  };
  const savePw = (event) => {
    setPw(event.target.value);
  };

  const handleSignin = async (e) => {
    try {
      setLoading(true);
      const data = await signup({ email, username, pw });
      setLoading(false);
      alert("회원가입 되었습니다");
      navigate("/signin");
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert(e);
      }
      setLoading(false);
    }
  };
  if (loading) return <Loading></Loading>;
  return (
    <div className="section">
      <h4 className="mb-4 pb-3">Log In</h4>
      <input
        type="email"
        name="logemail"
        className="form-style"
        placeholder="Your Email"
        id="logemail"
        autoComplete="off"
        onChange={saveEmail}
      ></input>
      <input
        type="username"
        name="username"
        className="form-style"
        placeholder="Username"
        id="logemail"
        autoComplete="off"
        onChange={saveUsername}
      ></input>
      <input
        type="password"
        name="logpass"
        className="form-style"
        placeholder="Your Password"
        id="logpass"
        autoComplete="off"
        onChange={savePw}
      ></input>
      <button className="btn" onClick={handleSignin}>
        submit
      </button>
    </div>
  );
};

export default SignupPage;
