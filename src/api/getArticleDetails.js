import axios from "axios";
async function getArticleDetails({articleId}){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://52.78.129.190:8080/article/${articleId}`,
        headers: { }
      };
      
    const response = await axios.request(config);
    console.log(response.data)
    return response.data;
}
    
export default getArticleDetails