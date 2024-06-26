import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../css/Signin.css";
import Loading from "../component/Loading";
import { signin } from "../api/user.js";
import useAsync from "../hooks/useAsync.js";
import { UserContext } from "../UserContext.js";

const SigninPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveEmail = (event) => {
    setEmail(event.target.value);
  };
  const savePw = (event) => {
    setPw(event.target.value);
  };

  const handleSignin = async (e) => {
    try {
      setLoading(true);
      const data = await signin({ email, pw });
      Cookies.set("accessToken", data.accessToken);
      Cookies.set("refreshToken", data.refreshToken);
      setIsLoggedIn(true);
      setLoading(false);
      navigate("/board");
    } catch (e) {
      alert(e.response.data.message);
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
      <p className="mb-0 mt-4 text-center">
        <a href="#0" className="link">
          Forgot your password?
        </a>
      </p>
    </div>
  );
};

export default SigninPage;
