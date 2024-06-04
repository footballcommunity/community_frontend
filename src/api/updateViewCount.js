import axios from "axios";
import Cookies from 'js-cookie';

const updateViewCount = (articleId) => {
    const accessToken = Cookies.get("accessToken");
    let data = JSON.stringify({
        "articleId": articleId,
    });

    let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: 'http://52.78.129.190:8080/article/view',
        headers: { 
            'Authorization': accessToken, 
            'Content-Type': 'application/json'
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

export default updateViewCount