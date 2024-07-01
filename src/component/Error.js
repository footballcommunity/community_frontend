import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { reissueToken } from "../api/user";
import Cookies from "js-cookie";
import { UserContext } from "../UserContext";
const Error = (error, refetch) => {
  console.log(error);
  const errorCode = error.error.errorCode;
  const errorMessage = error.error.message;
  const timeStamp = error.error.timeStamp;
  const navigate = useNavigate();
  console.log(errorCode);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  switch (errorCode) {
    // 서버 오류
    // AccessToken 만료
    case "4105":
      // 토큰 재발급
      reissueToken()
        .then((data) => {
          console.log(data);
          Cookies.set("accessToken", data.accessToken);
          Cookies.set("refreshToken", data.refreshToken);
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          const errorCode = e.response.data.errorCode;
          // 재로그인 필요
          if (errorCode === 4106) {
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            setIsLoggedIn(false);
            navigate("/signin");
          }
        });
      break;
    case 4002:
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      setIsLoggedIn(false);
      console.log("asd");
      navigate("/signin");
      break;
    case "5000":
      console.log(errorCode);
      console.log(errorMessage);
      return <div>{errorMessage}</div>;

    default:
  }
};

export default Error;
