import React, {useEffect, useState} from 'react';
import useAsync from '../hooks/useAsync.js';
import { useParams } from 'react-router-dom';
import getArticleDetails from '../api/getArticleDetails';
import "../css/ArticleDetails.css"
import Comment from '../component/Comment';
import postComment from '../api/comment.js';
import updateViewCount from "../api/updateViewCount";
import Loading from '../component/Loading.js';
import { Error } from '../component/Error.js';
import Cookies from 'js-cookie';

const BoardDetailPage = () => {
  const articleId = useParams().articleId;
  const [newComment, setNewComment] = useState("")
  const [state, refetch] = useAsync(getArticleDetails,[articleId],{articleId});
  const {loading, data, error} = state;  

  const addViewCount = async () => {
    let hasViewed = Cookies.get(`communisty_service_${articleId}`);
    if(hasViewed === undefined){
      updateViewCount(Number(articleId));
      Cookies.set(`communisty_service_${articleId}`, true);
    } 
  }

  const dateFormat = (date) => {
    let format = (date||"").split("T")
    return format[0] + " " + (format[1]||"").split(".")[0]
  }
  
  const saveNewComment = (e) => {
    setNewComment(e.target.value)
  }
  
  const postNewComment = async (e) => {
    const comment = newComment
    const parentId = null
    const params = {
      "articleId":articleId,
      "parentId":null,
      "content":comment
    }

    
    try{ 
      await postComment(params)}
    catch{
      window.alert("실패 했습니다")
    }
    
  }

  if (loading) return <Loading></Loading>;
  if (error | !data) return <Error></Error>

  const boardInfo = data.articleInfo
  const commentList = data.commentList
  return (
    <div className='wrapper'>
      <div className='main'>
        <div className='el'>{boardInfo.categoryName}</div>
        <div className='el'>{boardInfo.title}</div>
      </div>
        <div className='sub'>
          <div className='el'>{boardInfo.authorName}</div>
          <div className='el'>•</div>
          <div className='el'>{dateFormat(boardInfo.dateCreated)}</div>
          <div className='el'>•</div>
          <div className='el'>{boardInfo.viewCount}</div>
        </div>
        <div id='article_content'>{boardInfo.content}</div>
        <div className='comments'>
          <div>댓글</div>
          <div id="input_form">
            <textarea id="comment_input" rows={3} onChange={saveNewComment}></textarea>
            <button id="comment_btn" articleId={articleId} onClick={postNewComment}>확인</button>
          </div>
          {commentList.map(
            (comment) => <Comment key={`comment_${comment.commentId}`} comment={comment} commentId={comment.commentId} articleId={articleId}></Comment>
          )}
        </div>
    </div>
  );
};

export default BoardDetailPage;