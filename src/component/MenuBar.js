import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import '../css/MenuBar.css'

const MenuBar = ({setSelectedCategory}) => {
    const navigate = useNavigate();
    const path = useLocation().pathname;
    const [selected, setSelected] = useState("TITLE");
    const [keyword, setKeyword] = useState("")
    const search = () => {
        console.log(keyword)
        console.log(selected)
        if(path.includes("search")){
            navigate(`${path}?keyword=${keyword}&searchType=${selected}`)
        }
        else{
            navigate(`${path}/search?keyword=${keyword}&searchType=${selected}`)
        }
        window.location.reload();
    }

    const handleSelect = (e) => {
        setSelected(e.target.value);
      };
    
    const handleInput = (e) => {
        setKeyword(e.target.value)
      };

    const onClickHandler = (e) => {
        setSelectedCategory(parseInt(e.target.getAttribute("category")))
    }
    return (
        <div className="menubar">
            <div className="menulink" onClick={onClickHandler} category="-1">전체 게시판</div>
            <div className="menulink" onClick={onClickHandler} category="1">축구 게시판</div>
            <div className="menulink" onClick={onClickHandler} category="2">농구 게시판</div>
            <input className="search" onChange={handleInput}></input>
            <select onChange={handleSelect} value={selected}>
                <option value="TITLE">제목</option>
                <option value="CONTENT">내용</option>
                <option value="AUTHOR">작성자</option>
            </select>
            <button onClick={search}>검색</button>
        </div>
    );
};

export default MenuBar;