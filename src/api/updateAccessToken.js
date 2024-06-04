import axios from 'axios';
import errorHandler from '../utils/errorHandler';
import StaticValues from '../utils/StaticValues';
import Cookies from 'js-cookie';

async function updateAccessToken(){
    const accessToken = Cookies.get("accessToken")
    const refreshToken = Cookies.get("refreshToken")
    const data = new FormData();
    data.append("refreshToken", refreshToken);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://${StaticValues.BASE_URL}/members/refresh`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };
    try{
        const response = await axios.request(config)
        return {"status" : response.status, "data" : response.data};
    } catch(error){
        return errorHandler(error)
    }
    
}

export default updateAccessToken;