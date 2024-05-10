import axios from "axios";

async function getSearch(props){
  let searchType = props.option;
  let keyword = props.keyword;
  let page = props.page;
  if(page === undefined){
    page = 1
  }
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://52.78.129.190:8080/board/search?page=${page}`,
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
    
export default getSearch