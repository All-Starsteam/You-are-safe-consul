import React from "react";

const OnePost = (props) => {
  
  return(
    <div >
        <div>{props.data.topic}</div>
        <div >
          <span > {props.data.username} </span>
          {props.data.topic}
        </div>
        <div > {props.data.content} </div>
        <div > {props.data.description} </div>
       
      </div>
  )}

export default OnePost;