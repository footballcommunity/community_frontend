import axios from "axios";

async function getBoardList(params, category){
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://52.78.129.190:8080/board${params}`,
    headers: { }
  };
  try {
    console.log(params)
    const response = await axios.request(config);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
    
export default getBoardList