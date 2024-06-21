import axios from "axios";
import Cookies from 'js-cookie';

async function postComment(params){
    const token = Cookies.get("accessToken")
    console.log(params.articleId);
    console.log(params.parentId);
    console.log(params.content);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://52.78.129.190:8080/comment/${params.articleId}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': token
        },
        data : params
    };

    const response = await axios.request(config)
    return response.data
}

export default postComment