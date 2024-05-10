import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import '../css/MenuBar.css'

const MenuBar = () => {
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
    return (
        <div className="menubar">
            <Link className="menulink" to="/board?page=1">전체 게시판</Link>
            <Link className="menulink" to="/board/1?page=1">축구 게시판</Link>
            <Link className="menulink"to="/board/2?page=1">농구 게시판</Link>
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