import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

async function getUserInfo() {
  const token = Cookies.get("accessToken");

  let config = {
    method: "get",
    url: "http://52.78.129.190:8080/members/info",
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.request(config);
  console.log(response);
  return response.data;
}

async function reissueToken() {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  let config = {
    method: "post",
    url: "http://52.78.129.190:8080/members/refresh",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      accessToken: accessToken,
      refreshToken: refreshToken,
    }),
  };

  const response = await axios.request(config);
  console.log(response);
  return response.data;
}

async function signin({ email, pw }) {
  let config = {
    method: "post",
    url: "http://52.78.129.190:8080/members/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      email: email,
      password: pw,
    }),
  };

  const response = await axios.request(config);
  return response.data;
}

async function signup({ email, username, pw }) {
  let config = {
    method: "post",
    url: "http://52.78.129.190:8080/members/signup",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      role: "MEMBER",
      email: email,
      username: username,
      password: pw,
      status: "ACTIVE",
    }),
  };

  const response = await axios.request(config);
  return response.data;
}
export { getUserInfo, reissueToken, signin, signup };
