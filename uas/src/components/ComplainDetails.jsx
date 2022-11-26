import React from "react";

const ComplainDetails = (props) => {

 

  return (
    <div
      style={{ border: "thick solid black", margin: "25px", width: "1000px" }}
    >
      <h4>{props.data.username}</h4>
      <p> {props.data.content} </p>
      <button onClick={() => {}}>⬆️</button>
      <button onClick={() => {}}>⬇️</button>
      <button onClick={() => {props.changeView('update')}}>update</button>
      <button onClick={() => {props.delete(props.data._id)}}>delete</button>

    </div>
  );
};

export default ComplainDetails;
