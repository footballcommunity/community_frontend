import host from './host'
import axios from 'axios';
import Cookies from 'js-cookie';

const signin = async ({email, pw}) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: {host}.host+'/members/signin',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify({
          "email": email,
          "password": pw
        })
    };

    try {
        const response = await axios.request(config);
        console.log(response)
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        // 쿠키 저장 
        Cookies.set('accessToken', accessToken, { expires:7})
        Cookies.set('refreshToken', refreshToken, { expires:7})
        // 홈으로 이동 
    } catch (error) {
        console.log(error)
    }
  }

export default signin;
