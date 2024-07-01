import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "../config";
async function getBoardList(params) {
  console.log(params);
  if (params.keyword && params.selectedCategory === -1) {
    return getSearchedList(params);
  } else if (params.keyword && params.selectedCategory !== -1) {
    return getCategorySearchList(params);
  } else if (params.selectedCategory === -1) {
    return getAllBoardList(params);
  } else {
    return getCategoryList(params);
  }
}

async function getAllBoardList({ selectedPage }) {
  const response = await axios.get(`${BASE_URL}/board?page=${selectedPage}`);
  console.log(selectedPage);
  console.log(response);
  return response.data;
}

async function getCategoryList({ selectedPage, selectedCategory }) {
  console.log(selectedCategory);
  const response = await axios.get(
    `${BASE_URL}/board/${selectedCategory}?page=${selectedPage}`
  );
  console.log(response);
  return response.data;
}

async function getSearchedList({ selectedPage, selectedType, keyword }) {
  const response = await axios.get(
    `${BASE_URL}/board/search?searchType=${selectedType}&keyword=${keyword}&page=${selectedPage}`
  );
  return response.data;
}

async function getCategorySearchList({
  selectedPage,
  selectedCategory,
  selectedType,
  keyword,
}) {
  const response = await axios.get(
    `${BASE_URL}/board/${selectedCategory}/search?searchType=${selectedType}&keyword=${keyword}&page=${selectedPage}`
  );
  return response.data;
}

async function postArticle({ categoryId, title, content }) {
  const accessToken = Cookies.get("accessToken");
  let config = {
    method: "post",
    url: `${BASE_URL}/article/${categoryId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    data: JSON.stringify({
      title: title,
      content: content,
    }),
  };

  const response = await axios.request(config);
  return response.data;
}
export { getBoardList, postArticle };
