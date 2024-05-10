/* BoardList.js */
import React, {useEffect, useState} from 'react';
import Article from "../component/Article";
import MenuBar from "../layout/MenuBar";
import '../css/BoardList.css'
import Page from '../component/Page';
import getCategoryBoardList from '../api/getCategoryBoardList';
import { useParams, useLocation } from 'react-router-dom';

const CategoryBoardList = (props) => {
  const location = useLocation().search;
  const path = useLocation().pathname;
  const boardId = useParams().boardId;
  const [board, setBoard] = useState([]);
  const [maxPage, setMaxPage] = useState();
  const [startPage, setStartPage] = useState();
  const [endPage, setEndPage] = useState();
  const [page, setPage] = useState();
  
  const fetchBoardList = async () => {
    try {
      const response = await getCategoryBoardList({"params":location, "id":boardId});
      console.log(response)
      setBoard(response.pageList);
      setPage(response.page.page);
      setMaxPage(response.page.maxPage)
      setStartPage(response.page.startPage);
      setEndPage(response.page.endPage);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchBoardList();
  }, [boardId, location]);
  
  return (
    <div className="list">
    <MenuBar></MenuBar>
        {
          board.map((article) => (
            <Article key={article.articleId} articleId={article.articleId} title={article.title} authorName={article.authorName} categoryName={article.categoryName} viewCount={article.viewCount} dateCreated={article.dateCreated} dateUpdated={article.dateUpdated}></Article>
          ))
        }
    <Page pageInfo={{path, page, maxPage, startPage, endPage}}></Page>
    </div>
  );
};

export default CategoryBoardList;