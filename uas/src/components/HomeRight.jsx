import React from 'react'
import allone from '../images/allOne.png'
var HomeRight = (props) =>{
const Topics=['violence','rape','hei','hiiii']


      return (
      <div><div><img className="image-right" src={allone} alt=''/>
        <div className="hashtags">  
          {Topics.map((e, i) => (
            <button onClick={()=>{props.getAllTopics(e)}} >#{e}</button>
          ))}
        </div>
        
        
        </div>

       
      </div>
    );
}


export default HomeRight