import axios from "axios";

async function getBoardList(path,params){
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://52.78.129.190:8080${path}${params}`,
    headers: { }
  };
  try {
    console.log(params)
    const response = await axios.request(config);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error
  }
}
    
export default getBoardList