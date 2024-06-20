import axios, { AxiosError } from "axios";


const getMatchList = async(params) => {
  const response = await axios.get(`http://52.78.129.190:8080/match`);  
  console.log(response)
  return response.data;
}
    
export {getMatchList}