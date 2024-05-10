import React from 'react';
import {Link} from 'react-router-dom';
import "../css/Page.css";


const Page = ({pageInfo}) => {
  const PAGE_SIZE = 5
  const maxPageNum = Math.ceil(pageInfo.maxPage / PAGE_SIZE);
  const pageNum = pageInfo.endPage / PAGE_SIZE
  const path = pageInfo.path
  let back = ""
  let next = ""
  let cur = 1
  if(pageNum === 1){
    back = `${path}?page=1`
  } else{
    back = `${path}?page=${(pageNum-1)*PAGE_SIZE}`
  }

  if(pageNum === maxPageNum){
    next = `${path}?page=${pageInfo.maxPage}`
  } else{
    next = `${path}?page=${(pageNum)*PAGE_SIZE+1}`
  }
  
  let step;
  let pages = []
  for (step = pageInfo.startPage; step <= pageInfo.endPage; step++) {
    pages.push(step)
  }
  return (
    <div id="page_wrapper">
      <Link id="back" className='page_el' to={back}>이전</Link>
      {pages.map((num) => {
        if(num === pageInfo.currentPage){
          return <Link id="current" key={num} className='page_el' to={`${path}?page=${num}`}>{num}</Link>
        }else{
          return <Link key={num} className='page_el' to={`${path}?page=${num}`}>{num}</Link>
        }
      }
      )}
      <Link id="next" className='page_el' to={next}>다음</Link>
    </div>
  );
};

export default Page;