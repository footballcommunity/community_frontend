import React, { useState } from "react";
import "../css/MenuBar.css";

const MenuBar = ({
  setSelectedType,
  setKeyword,
  setSelectedCategory,
  setSelectedPage,
}) => {
  const [selected, setSelected] = useState("TITLE");
  const [key, setKey] = useState("");

  const handleSearch = async () => {
    setSelectedType(selected);
    setKeyword(key);
    setSelectedPage(1);
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleInput = (e) => {
    setKey(e.target.value);
  };

  const onClickHandler = (e) => {
    setSelectedCategory(parseInt(e.target.getAttribute("category")));
    setKeyword(null);
  };
  return (
    <div className="menubar">
      <div className="menulink" onClick={onClickHandler} category="-1">
        전체 게시판
      </div>
      <div className="menulink" onClick={onClickHandler} category="1">
        축구 게시판
      </div>
      <div className="menulink" onClick={onClickHandler} category="2">
        농구 게시판
      </div>
      <input className="search" onChange={handleInput}></input>
      <select onChange={handleSelect} value={selected}>
        <option value="TITLE">제목</option>
        <option value="CONTENT">내용</option>
        <option value="AUTHOR">작성자</option>
      </select>
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default MenuBar;
