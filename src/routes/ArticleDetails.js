import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import getArticleDetails from '../api/getArticleDetails';
import "../css/ArticleDetails.css"
import Comment from '../component/Comment';
import postComment from '../api/postComment';
import updateViewCount from "../api/updateViewCount";

import Cookies from 'js-cookie';

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
  const [comment, setComment] = useState("");
  const [isFetched, setIsFetched] = useState(false)
  const saveComment = event => {
    setComment(event.target.value);
  }
  const handleComment = () => {
    postComment({
      "articleId" : articleId,
      "parentId" : null,
      "content" : comment
    });
    window.location.reload();
  }

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
      setIsFetched(true);
    } catch (error) {
      console.log(error) 
    }
  }
  

  const addViewCount = async () => {
    let hasViewed = Cookies.get(`communisty_service_${articleId}`);
    console.log(articleId)

    if(hasViewed === undefined){
      console.log(articleId)
      updateViewCount(Number(articleId));
      Cookies.set(`communisty_service_${articleId}`, true);
    } 
  }
  const dateFormat = (date) => {
    let format = (date||"").split("T")
    return format[0] + " " + (format[1]||"").split(".")[0]
  }
  useEffect(()=>{
    fetchArticleDetails()
  }, []);
  
  useEffect(() => {
    addViewCount();
  }, [isFetched])
  return (
    <div className='wrapper'>
      <div className='main'>
        <div className='el'>{categoryName}</div>
        <div className='el'>{title}</div>
      </div>
        <div className='sub'>
          <div className='el'>{authorName}</div>
          <div className='el'>•</div>
          <div className='el'>{dateFormat(dateCreated)}</div>
          <div className='el'>•</div>
          <div className='el'>{viewCount}</div>
        </div>
        <div id='article_content'>{content}</div>
        <div className='comments'>
          <div>댓글</div>
          <div id="input_form">
            <textarea id="comment_input" rows={3} onChange={saveComment}></textarea>
            <button id="comment_btn" onClick={handleComment}>확인</button>
          </div>
          {commentList.map(
            (comment) => <Comment key={`comment_${comment.commentId}`} comment={comment} commentId={comment.commentId} articleId={articleId}></Comment>
          )}
        </div>
    </div>
  );
};

export default ArticleDetails;