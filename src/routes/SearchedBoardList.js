/* BoardList.js */
import React, {useEffect, useState} from 'react';
import Article from "../component/Article";
import MenuBar from "../layout/MenuBar";
import '../css/BoardList.css'
import Page from '../component/Page';
import getBoardList from '../api/getBoardList';
import { useLocation } from 'react-router-dom';

const SearchedBoardList = (props) => {
  const location = useLocation().search;
  const path = useLocation().pathname;
  console.log(location)
  const [board, setBoard] = useState([]);
  const [maxPage, setMaxPage] = useState();
  const [startPage, setStartPage] = useState();
  const [endPage, setEndPage] = useState();
  // params
  const [page, setPage] = useState();

  const fetchBoardList = async () => {
    try {
      const response = await getBoardList(location);
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
  }, [location]);
  
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

export default SearchedBoardList;