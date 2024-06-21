import axios, { AxiosError } from "axios";
import Cookies from 'js-cookie';
import errorHandler from "../utils/errorHandler";


async function getUserInfo(){
  const token = Cookies.get("accessToken")

  let config = {
    method: 'get',
    url: 'http://52.78.129.190:8080/members/info',
    headers: { 
      'Authorization': token
    }
  };
  
  const response = await axios.request(config);
  return response.data;
}
    
export default getUserInfo