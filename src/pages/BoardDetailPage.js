import React, { useEffect, useState, useContext } from "react";
import useAsync from "../hooks/useAsync.js";
import { useParams } from "react-router-dom";
import getArticleDetails from "../api/getArticleDetails";
import "../css/ArticleDetails.css";
import Comment from "../component/Comment";
import postComment from "../api/comment.js";
import updateViewCount from "../api/updateViewCount";
import Loading from "../component/Loading.js";
import Error from "../component/Error.js";
import Cookies from "js-cookie";
import { UserContext } from "../UserContext.js";

const BoardDetailPage = () => {
  const articleId = useParams().articleId;
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [newComment, setNewComment] = useState("");
  const [state, run] = useAsync(getArticleDetails);

  const { loading, data, error } = state;

  const addViewCount = async () => {
    let hasViewed = Cookies.get(`communisty_service_${articleId}`);
    if (hasViewed === undefined) {
      try {
        updateViewCount(Number(articleId));
        Cookies.set(`communisty_service_${articleId}`, true);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    run({ articleId });
    addViewCount();
  }, []);

  const dateFormat = (date) => {
    let format = (date || "").split("T");
    return format[0] + " " + (format[1] || "").split(".")[0];
  };

  const saveNewComment = (e) => {
    setNewComment(e.target.value);
  };

  const postNewComment = async (e) => {
    if (!isLoggedIn) {
      alert("로그인을 해주세요");
      return;
    }
    const comment = newComment;
    const parentId = null;
    const params = {
      articleId: articleId,
      parentId: null,
      content: comment,
    };

    try {
      await postComment(params);
      window.location.reload();
    } catch (e) {
      console.log(e);
      window.alert(e.response.data.message);
    }
  };

  if (loading) return <Loading></Loading>;
  if (error) return <Error error={error} refetch={run}></Error>;
  if (!data) return null;

  const boardInfo = data.articleInfo;
  const commentList = data.commentList;
  return (
    <div className="wrapper">
      <div className="main">
        <div className="el">{boardInfo.categoryName}</div>
        <div className="el">{boardInfo.title}</div>
      </div>
      <div className="sub">
        <div className="el">{boardInfo.authorName}</div>
        <div className="el">•</div>
        <div className="el">{dateFormat(boardInfo.dateCreated)}</div>
        <div className="el">•</div>
        <div className="el">{boardInfo.viewCount}</div>
      </div>
      <div id="article_content">{boardInfo.content}</div>
      <div className="comments">
        <div>댓글</div>
        <div id="input_form">
          <textarea
            id="comment_input"
            rows={3}
            onChange={saveNewComment}
          ></textarea>
          <button
            id="comment_btn"
            articleid={articleId}
            onClick={postNewComment}
          >
            확인
          </button>
        </div>
        {commentList.map((comment) => (
          <Comment
            key={comment.commentId}
            comment={comment}
            commentId={comment.commentId}
            articleId={articleId}
          ></Comment>
        ))}
      </div>
    </div>
  );
};

export default BoardDetailPage;
