/* BoardList.js */
import React, { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync.js';
import DateContainer from '../component/DateContainer.js';
import { getMatchList } from '../api/match.js';
import "../css/HomePage.css"
import MatchContianer from '../component/MatchContainer.js';
import Page from '../component/Page.js';
const HomePage = () => {
  const [state, refetch] = useAsync(getMatchList,[]);
  const {loading, data, error} = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  const pageData = data.page
  const matchData = data.matchList
  
  return (
    <div>
      <h1> 축구/풋살 용병 게시판 </h1>
      <DateContainer></DateContainer>
      <MatchContianer matchList={matchData}></MatchContianer>
      <Page pageInfo={pageData}></Page>
    </div>
  );
};

export default HomePage;