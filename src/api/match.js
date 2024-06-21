import axios, { AxiosError } from "axios";


const getMatchList = async(params) => {
  const selectedDate = params[0]
  const selectedPage = params[1]
  const response = await axios.get(`http://52.78.129.190:8080/match?currentTime=${selectedDate}&page=${selectedPage}`);  
  console.log(response)
  return response.data;
}
    
export {getMatchList}