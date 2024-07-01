import axios from "axios";
import BASE_URL from "../config";
async function getArticleDetails({ articleId }) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/article/${articleId}`,
    headers: {},
  };

  const response = await axios.request(config);
  console.log(response.data);
  return response.data;
}

export default getArticleDetails;
