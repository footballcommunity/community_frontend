import axios from "axios";
import Cookies from 'js-cookie';

async function postComment(data){
    const token = Cookies.get("accessToken")
    console.log("token : " + token)
    
    console.log(data.articleId);
    console.log(data.parentId);
    console.log(data.content);


    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://52.78.129.190:8080/comment/${data.articleId}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': token
        },
        data : data
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });
}

export default postComment