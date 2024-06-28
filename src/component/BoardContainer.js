import React from "react";
import { Link } from "react-router-dom";

const BoardItem = ({
  articleId,
  title,
  authorName,
  categoryName,
  viewCount,
  dateCreated,
  dateUpdated,
}) => {
  return (
    <article key={articleId}>
      <Link className="todetails" to={`/article/${articleId}`}>
        <div className="top">
          <div className="category">{categoryName}</div>
          <div className="article_title">{title}</div>
        </div>
      </Link>
      <div className="bottom">
        <div className="author">{authorName} |</div>
        <div className="date">{dateCreated} |</div>
        <div className="view-count">view : {viewCount}</div>
      </div>
    </article>
  );
};

const BoardContainer = ({ boardList }) => {
  return boardList.map((board) => {
    return (
      <BoardItem
        key={board.articleId}
        articleId={board.articleId}
        title={board.title}
        authorName={board.authorName}
        categoryName={board.categoryName}
        viewCount={board.viewCount}
        dateCreated={board.dateCreated}
        dateUpdated={board.dateUpdated}
      ></BoardItem>
    );
  });
};

export default BoardContainer;
