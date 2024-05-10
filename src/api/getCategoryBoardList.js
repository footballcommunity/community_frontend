import axios from "axios";

async function getCategoryBoardList(props){
  console.log(props)
  const params = props.params;
  const categoryId = props.id;

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://52.78.129.190:8080/board/${categoryId}${params}`,
    headers: { }
  };
  try {
    const response = await axios.request(config);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
    
export default getCategoryBoardList