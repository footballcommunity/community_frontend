/* BoardList.js */
import React, { useEffect, useState } from "react";
import BoardContainer from "../component/BoardContainer";
import MenuBar from "../component/MenuBar.js";
import useAsync from "../hooks/useAsync.js";
import Loading from "../component/Loading.js";
import Error from "../component/Error.js";
import "../css/BoardList.css";
import Page from "../component/Page";
import getBoardList from "../api/board.js";

const BoardPage = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [state, run] = useAsync(getBoardList);

  useEffect(() => {
    run({ selectedPage, selectedCategory });
  }, [selectedPage, selectedCategory]);

  const { loading, data, error } = state;

  if (loading) return <Loading></Loading>;
  if (error) return <Error error={error} refetch={run}></Error>;
  if (!data) return null;
  return (
    <div className="list">
      <MenuBar setSelectedCategory={setSelectedCategory}></MenuBar>
      <BoardContainer boardList={data.pageList}></BoardContainer>
      <Page setSelectedPage={setSelectedPage} pageInfo={data.page}></Page>
    </div>
  );
};

export default BoardPage;
