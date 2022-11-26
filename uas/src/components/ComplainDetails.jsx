import React from "react";

const ComplainDetails = (props) => {
  
  return(
  <div >
      <div >{props.data.topic}</div>
      <div>
        <span className="usrname" > {props.data.username} </span>
        {props.data.topic}
      </div>
      <div > {props.data.content} </div>
     
    </div>
);}

export default ComplainDetails;