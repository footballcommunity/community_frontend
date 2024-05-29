import axios from "axios";
import Cookies from 'js-cookie';


async function getUserInfo(){
  const token = Cookies.get("accessToken")
  console.log("token : " + token)
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://52.78.129.190:8080/members/info',
    headers: { 
      'Authorization': token
    }
  };
  try {
    const response = await axios.request(config);
    return response.data
  } catch (error) {
    throw error
  }
}
    
export default getUserInfo