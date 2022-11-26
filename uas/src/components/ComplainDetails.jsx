import React from "react";
import user from "../images/user2.png";
import help from "../images/help.png";
const ComplainDetails = (props) => {


  return (
    <div className="posts">
      <div className="post-card">
        <div className="name-image">
          <img className="avatar-user" src={user} alt='' />
          <span className="name-user">{props.data._id}</span>
        </div>
        <div className="content-vote">
          <div className="post-content">{props.data.content}</div>
          <img className="help" alt='' src={help} onClick={()=>{props.upVotes(props.data._id)
             window.location.reload()
}}/>
          <span className="votes">{props.data.upVote}</span>
        </div>
      </div>
    </div>
  );
};

export default ComplainDetails;
