import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import getArticleDetails from '../api/getArticleDetails';
import "../css/ArticleDetails.css"
import Comment from '../component/Comment';

const ArticleDetails = () => {
  const articleId = useParams().articleId;
  const [authorName, setAuthorName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent ] = useState('');
  const [viewCount, setViewCount] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [dateUpdated, setDateUpdated] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [children, setChildren] = useState([]);
  const fetchArticleDetails = async () => {
    try {
      const res = await getArticleDetails({articleId});
      setAuthorName(res.articleInfo.authorName)
      setCategoryName(res.articleInfo.categoryName)
      setTitle(res.articleInfo.title)
      setContent(res.articleInfo.content)
      setViewCount(res.articleInfo.viewCount)
      setDateCreated(res.articleInfo.dateCreated)
      setDateUpdated(res.articleInfo.dateUpdated)
      setCommentList(res.commentList)
      setChildren(res.commentList.children)
    } catch (error) {
      console.log(error) 
    }
  }
  useEffect(()=>{
    fetchArticleDetails();
  }, []);
  

  return (
    <div className='wrapper'>
      <div className='main'>
        <div className='el'>{categoryName}</div>
        <div className='el'>{title}</div>
      </div>
        <div className='sub'>
          <div className='el'>{authorName}</div>
          <div className='el'>•</div>
          <div className='el'>{dateCreated}</div>
          <div className='el'>•</div>
          <div className='el'>{viewCount}</div>
        </div>
        <div id='article_content'>{content}</div>
        <div className='comments'>
          <div>댓글</div>
          <div id="input_form">
            <textarea id="comment_input" rows={3}></textarea>
            <button id="comment_btn">확인</button>
          </div>
          {commentList.map(
            (comment) => <Comment key={`comment_${comment.commentId}`} comment={comment}></Comment>
          )}
        </div>
    </div>
  );
};

export default ArticleDetails;