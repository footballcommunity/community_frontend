import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import '../css/MenuBar.css'

const MenuBar = () => {
    const [selected, setSelected] = useState("토픽 선택");
    
    const search = () => {
        
    }

    const handleSelect = (e) => {
        setSelected(e.target.value);
      };
    

    return (
        <div className="menubar">
            <Link className="menulink" to="/board?page=1">전체 게시판</Link>
            <Link className="menulink" to="/board/1?page=1">축구 게시판</Link>
            <Link className="menulink"to="/board/2?page=1">농구 게시판</Link>
            <input className="search"></input>
            <select onChange={handleSelect} value={selected}>
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="author">작성자</option>
            </select>
            <button onClick={search}>검색</button>
        </div>
    );
};

export default MenuBar;