const getPageInfo = (pageInfo) => {
  console.log(pageInfo);
  const PAGE_SIZE = 5;
  var maxPage = pageInfo.maxPage;
  if (maxPage === 0) {
    maxPage = 1;
  }
  const maxPageNum = Math.ceil(pageInfo.maxPage / PAGE_SIZE);
  const pageNum = Math.ceil(pageInfo.endPage / PAGE_SIZE);
  var back = 1;
  if (pageNum === 1 || pageNum === 0) {
    back = 1;
  } else {
    back = (pageNum - 1) * PAGE_SIZE;
  }
  var next = 1;
  if (pageNum === maxPageNum) {
    next = maxPage;
  } else {
    next = pageNum * PAGE_SIZE + 1;
  }

  let step;
  let pages = [];
  for (step = pageInfo.startPage; step <= pageInfo.endPage; step++) {
    pages.push(step);
  }

  return { pages, back, next };
};

export { getPageInfo };
