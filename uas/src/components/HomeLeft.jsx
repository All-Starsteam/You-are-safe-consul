import React from "react";
import ComplainDetails from "./ComplainDetails.jsx";

var HomeLeft = (props) => {
  return (
    <div className="card">
      {props.data.map((e, i) => (
        <ComplainDetails data={e} upVotes={props.upVotes} key={i} />
      ))}

     
    </div>
  );
};

export default HomeLeft;
