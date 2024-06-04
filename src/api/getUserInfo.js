import axios, { AxiosError } from "axios";
import Cookies from 'js-cookie';
import errorHandler from "../utils/errorHandler";


async function getUserInfo(){
  const token = Cookies.get("accessToken")
  let response;
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://52.78.129.190:8080/members/info',
    headers: { 
      'Authorization': token
    }
  };
  try {
    response = await axios.request(config);
    console.log(response.status);
    return {"status": response.status, "data": response.data};
  } catch (error) {
    return errorHandler(error);
  }
}
    
export default getUserInfo