import React from 'react';
import {Link} from 'react-router-dom';
import "../css/Article.css";

const Article = ({articleId, title, authorName, categoryName, viewCount, dateCreated, dateUpdated }) => {
  return (
      <article key={articleId}>
        <Link className="todetails" to={`/article/${articleId}`}>
          <div className="top">
            <div className="category">{categoryName}</div>
            <div className="article_title">{title}</div>
          </div>
        </Link>
        <div className='bottom'>
          <div className="author">{authorName} |</div>
          <div className="date">{dateCreated} |</div>
          <div className="view-count">view : {viewCount}</div>
        </div>
      </article>
  );
};

export default Article;