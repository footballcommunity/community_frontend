/* BoardList.js */
import React, {useEffect, useState} from 'react';
import Article from "../component/Article";
import MenuBar from "../layout/MenuBar";
import '../css/BoardList.css'
import Page from '../component/Page';
import getBoardList from '../api/getBoardList';
import { useLocation } from 'react-router-dom';
import getCategoryBoardList from './getCategoryBoardList';

const BoardList = () => {
  const [board, setBoard] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [maxPage, setMaxPage] = useState();
  const [startPage, setStartPage] = useState();
  const [endPage, setEndPage] = useState();
  const [category, setCategory] = useState();
  const params = new URLSearchParams(useLocation().search);
  const page = params.get("page")
  const pageSize = params.get("pageSize")
  const blockSize = params.get("blockSize")

  let f;
  if(params.has("category")){
    f = getCategoryBoardList
    setCategory(params.get("category"))
  }
  else{
    f = getBoardList
  }

  const fetchBoardList = async () => {
    try {
      const response = await f({"category":category,"page":page, "pageSize":pageSize,"blockSize":blockSize});
      console.log(response)
      setBoard(response.pageList);
      setCurrentPage(response.page.page);
      setMaxPage(response.page.maxPage)
      setStartPage(response.page.startPage);
      setEndPage(response.page.endPage);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchBoardList();
  }, []);
  
  return (
    <div className="list">
    <MenuBar></MenuBar>
        {
          board.map((article) => (
            <Article key={article.articleId} articleId={article.articleId} title={article.title} authorName={article.authorName} categoryName={article.categoryName} viewCount={article.viewCount} dateCreated={article.dateCreated} dateUpdated={article.dateUpdated}></Article>
          ))
        }
    <Page pageInfo={{currentPage, maxPage, startPage, endPage}}></Page>
    </div>
  );
};

export default BoardList;