import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import BASE_URL from "../config";

async function getUserInfo() {
  const token = Cookies.get("accessToken");

  let config = {
    method: "get",
    url: `${BASE_URL}/members/info`,
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
    url: `${BASE_URL}/members/refresh`,
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
    url: `${BASE_URL}/members/signin`,
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
    url: `${BASE_URL}/members/signup`,
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
