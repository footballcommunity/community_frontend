/* BoardList.js */
import React, { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync.js';
import DateContainer from '../component/DateContainer.js';
import { getMatchList } from '../api/match.js';
import "../css/HomePage.css"
import MatchContianer from '../component/MatchContainer.js';
import Page from '../component/Page.js';
import Loading from '../component/Loading.js';
import { Error } from '../component/Error.js';
import { dateToString } from '../utils/dateUtils.js';
const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState(dateToString(new Date()))
  const [selectedPage, setSelectedPage] = useState(1)
  const [state, refetch] = useAsync(getMatchList,[selectedDate, selectedPage],{selectedDate, selectedPage});
  const {loading, data, error} = state;
  useEffect(() => {
    setSelectedPage(1)
  }, [selectedDate])
  if (loading) return <Loading></Loading>;
  if (error | !data) return <Error></Error>

  const pageData = data.page
  const matchData = data.matchList
  
  return (
    <div>
      <h1> 축구/풋살 용병 게시판 </h1>
      <DateContainer selectedDate={selectedDate.substr(8,2)} setSelectedDate={setSelectedDate}></DateContainer>
      <MatchContianer matchList={matchData}></MatchContianer>
      <Page setSelectedPage={setSelectedPage} pageInfo={pageData}></Page>
    </div>
  );
};

export default HomePage;