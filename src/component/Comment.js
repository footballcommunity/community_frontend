import React from 'react';
import {Link} from 'react-router-dom';
import "../css/Comment.css";


const Comment = (props) => {
  return (
    <div id="wrapper">
      <div className='parent'>
        <div id="comment_info">
          <div>{props.comment.username}</div>
          <div>{props.comment.dateCreated}</div>
        </div>
        <div>
          {props.comment.content}
        </div>
      </div>
      <div id="children">
        {props.comment.children.map(
          (child) => {
            console.log(child)
            return (
              <div className="child">
                <div className='child_icon'>↳</div>
                <div>
                  <div id="comment_info">
                    <div>{child.username}</div>
                    <div>{child.dateCreated}</div>
                  </div>
                  <div>
                    {child.content}
                  </div>
                </div>
              </div>
            ) 
          }
        )}
      </div>
    </div>
  );
};

export default Comment;