import React from 'react';
import {Link} from 'react-router-dom';
import "../css/Page.css";
import { getPageInfo } from '../utils/pageUtils';

const PageNumItem = ({num, iscurrent, onClickHandler}) => {
  return <div onClick={onClickHandler} iscurrent={iscurrent} key={num} num={num} className='page_el'>{num}</div>
}

const Page = ({setSelectedPage, pageInfo}) => {
  const {pages, back, next} =getPageInfo(pageInfo)
  const onClickHandler = (e) => {
    console.log(e.target.getAttribute("num"))
    setSelectedPage(e.target.getAttribute("num"))
  }

  return (
    <div id="page_wrapper">
      <div id="back" className='page_el' num={back} onClick={onClickHandler}>이전</div>
      {pages.map((num) => {
        var isCurrent
        (num === pageInfo.page ? isCurrent = "true" : isCurrent = "false")
        return <PageNumItem num={num} iscurrent={isCurrent} key={num} onClickHandler={onClickHandler} ></PageNumItem>
      }
      )}
      <div id="next" className='page_el' to={next} num={next} onClick={onClickHandler}>다음</div>
    </div>
  );
};

export default Page;