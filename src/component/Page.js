import React from 'react';
import {Link} from 'react-router-dom';
import "../css/Page.css";


const Page = ({pageInfo}) => {
  const PAGE_SIZE = 5
  let maxPage = pageInfo.maxPage
  if(maxPage === 0){
    maxPage = 1
  }
  console.log(pageInfo.endPage)
  const maxPageNum = Math.ceil(pageInfo.maxPage / PAGE_SIZE);
  const pageNum = Math.ceil(pageInfo.endPage / PAGE_SIZE);
  const path = pageInfo.path
  console.log(pageInfo)
  console.log(pageNum)
  console.log(maxPageNum)
  let back = ""
  let next = ""
  let cur = 1
  const params = new URLSearchParams(pageInfo.location)
  let defaultPath = `${path}`
  if(params.has("page")){
    params.delete("page")
  }
  if(params.size === 0){
    defaultPath += "?"
  }
  else{
    defaultPath += `?${params.toString()}&`
  }
  if(pageNum === 1 || pageNum === 0){
    back = `${defaultPath}page=1`
  } else{
    back = `${defaultPath}page=${(pageNum-1)*PAGE_SIZE}`
  }

  if(pageNum === maxPageNum){
    next = `${defaultPath}page=${maxPage}`
  } else{
    next = `${defaultPath}page=${(pageNum)*PAGE_SIZE+1}`
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
          return <Link id="current" key={num} className='page_el' to={`${defaultPath}?page=${num}`}>{num}</Link>
        }else{
          return <Link key={num} className='page_el' to={`${defaultPath}page=${num}`}>{num}</Link>
        }
      }
      )}
      <Link id="next" className='page_el' to={next}>다음</Link>
    </div>
  );
};

export default Page;