/* BoardList.js */
import React, { useEffect, useState } from "react";
import BoardContainer from "../component/BoardContainer";
import MenuBar from "../component/MenuBar.js";
import useAsync from "../hooks/useAsync.js";
import "../css/BoardPage.css";
import Page from "../component/Page";
import { getBoardList } from "../api/board.js";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";
import { useContext } from "react";

const BoardPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [state, run] = useAsync(getBoardList);
  const [selectedType, setSelectedType] = useState("TITLE");
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    run({ selectedPage, selectedCategory, selectedType, keyword });
  }, [selectedPage, selectedCategory, selectedType, keyword]);

  const handlePost = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다");
      navigate("/signin");
    } else {
      navigate("/post");
    }
  };

  return (
    <div className="list">
      <MenuBar
        setSelectedType={setSelectedType}
        setKeyword={setKeyword}
        setSelectedCategory={setSelectedCategory}
        setSelectedPage={setSelectedPage}
      ></MenuBar>
      <BoardContainer
        loading={state.loading}
        error={state.error}
        data={state.data}
      ></BoardContainer>
      <button id="post_btn" onClick={handlePost}>
        글쓰기
      </button>
      <Page
        setSelectedPage={setSelectedPage}
        loading={state.loading}
        error={state.error}
        data={state.data}
      ></Page>
    </div>
  );
};

export default BoardPage;
