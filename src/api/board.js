import axios from "axios";

async function getBoardList(params){
  console.log(params)
  if(params.selectedCategory === -1){
    return getAllBoardList(params)
  } else{
    return getCategoryList(params)
  }
}

async function getAllBoardList({selectedPage}){
  const response = await axios.get(`http://52.78.129.190:8080/board?page=${selectedPage}`);  
  console.log(selectedPage)
  console.log(response)
  return response.data;
}

async function getCategoryList({selectedPage, selectedCategory}){
  console.log(selectedCategory)
  const response = await axios.get(`http://52.78.129.190:8080/board/${selectedCategory}?page=${selectedPage}`);  
  console.log(response)
  return response.data;
}
    
export default getBoardList