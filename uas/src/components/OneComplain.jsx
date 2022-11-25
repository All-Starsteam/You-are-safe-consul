import React from "react";

const OnePost = (props) => {
  return(
    <div className="blog-list-item" >
        <div className="blog-list-item-title">{props.data.topic}</div>
        <div className="blog-list-item-byline">
          <span className="blog-list-item-byline-author"> {props.data.username} </span>
          {props.data.topic}
        </div>
        <div className="blog-list-item-lede"> {props.data.content} </div>
        <div className="blog-list-item-lede"> {props.data.description} </div>
       
      </div>
  )}

export default OnePost;