/* BoardList.js */
import React, { useContext, useEffect, useState } from "react";
import "../css/PostPage.css";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { postArticle } from "../api/board";

const PostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const saveTitle = (event) => {
    setTitle(event.target.value);
  };
  const saveContent = (event) => {
    setContent(event.target.value);
  };
  const saveCategoryId = (event) => {
    setCategoryId(event.target.value);
  };
  const submitHandler = async (e) => {
    try {
      const data = await postArticle({ categoryId, title, content });
      console.log(data);
      navigate(`/article/${categoryId}`);
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert(e);
      }
    }
  };

  return (
    <div className="container">
      <h1>게시글 작성</h1>
      <div>
        <label>제목</label>
        <div>
          <input id="title_input" onChange={saveTitle} required />
          <label>카테고리</label>
          <div>
            <select onChange={saveCategoryId}>
              <option value="1">축구게시판</option>
              <option value="2">농구게시판</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <label>본문</label>
        <div>
          <textarea
            id="content_input"
            rows="10"
            onChange={saveContent}
            required
          ></textarea>
        </div>
      </div>
      <div>
        <div id="button_container">
          <button onClick={submitHandler} id="submit-button">
            저장
          </button>
          <button type="button" id="cancel-button">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
