import React, { useState, useEffect } from "react";
import allone from "../images/allOne.png";
var HomeRight = (props) => {
  const Topics = ["violence", "rape", "hei", "hiiii"];
  var [counter, setCounter] = useState(0);
  var func = () => {
    var timer;
    timer = setTimeout(() => {
      var c = counter + 1;
      setCounter(c);
    }, 100);
    if (counter === 70) {
      clearTimeout(timer);
    }
  };

import allone from '../images/allOne.png'
var HomeRight = (props) =>{
const Topics = [
  "Bullying",
  "Racism/Sexism",
  "Sexual Violence",
  "Domestic Violence ",
];

      return (
      <div>
       
        <button className='btn-copmlain' onClick={()=>{

        props.changeView('create')
        console.log('create');
           }}>Create Complain</button>
      <div className="line"></div>
      <div>
        <img className="image-right" src={allone} alt="" />
        <div className="line"></div>
        <div className="hashtags">
          {Topics.map((e, i) => (
            <button
              onClick={() => {
                props.getAllTopics(e);
              }}
            >
              #{e}
            </button>
          ))}

          <div className="wrappers">
            <div className="container">
              <span className="num" data-val="400">
                {counter}
                {func()}
              </span>
              <span className="text">women abuse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
