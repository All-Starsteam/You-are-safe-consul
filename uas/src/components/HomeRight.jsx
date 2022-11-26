
import React from 'react'

import allone from '../images/allOne.png'
var HomeRight = (props) =>{
const Topics=['violence','rape','hei','hiiii']

      return (
      <div>
       
        <button className='btn-copmlain' onClick={()=>{
        props.changeView('create')
        console.log('create');
           }}>Create Complain</button>
        <div className='line'></div>
        <div><img className="image-right" src={allone} alt=''/>
        <div className='line'></div>
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

