import React from "react";
import { Link } from "react-router-dom";
import "../css/Page.css";
import { getPageInfo } from "../utils/pageUtils";
import Loading from "../component/Loading.js";
import Error from "../component/Error.js";

const PageNumItem = ({ num, iscurrent, onClickHandler }) => {
  return (
    <div
      onClick={onClickHandler}
      iscurrent={iscurrent}
      key={num}
      num={num}
      className="page_el"
    >
      {num}
    </div>
  );
};

const Page = ({ setSelectedPage, loading, error, data }) => {
  const onClickHandler = (e) => {
    console.log(e.target.getAttribute("num"));
    setSelectedPage(e.target.getAttribute("num"));
  };
  if (loading) return <Loading></Loading>;
  if (error) return <Error error={error}></Error>;
  if (!data) return null;
  const { pages, back, next } = getPageInfo(data.page);

  return (
    <div id="page_wrapper">
      <div id="back" className="page_el" num={back} onClick={onClickHandler}>
        이전 
      </div>
      {pages.map((num) => {
        var isCurrent;
        num === data.page.page ? (isCurrent = "true") : (isCurrent = "false");
        return (
          <PageNumItem
            num={num}
            iscurrent={isCurrent}
            key={num}
            onClickHandler={onClickHandler}
          ></PageNumItem>
        );
      })}
      <div
        id="next"
        className="page_el"
        to={next}
        num={next}
        onClick={onClickHandler}
      >
        다음
      </div>
    </div>
  );
};

export default Page;
