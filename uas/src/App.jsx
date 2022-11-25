import React from "react";
import {useEffect,useState} from "react"
import AllComplains from "./components/AllComplains.jsx";
import exampleData from "./dummydata";
import OneComplain from "./components/OneComplain.jsx";
import CreateComplain from "./components/CreateComplain.jsx";
import axios from "axios";
import './index.css'

let  App=()=> {
  const [view, setView] = useState("AllComplains");
  const [data, setData] = useState(exampleData);
//  useEffect(() => {
//    axios.get("").then((res) => {
//      setData(res.data);
//    });
//  }, []);
 const changeView=(newview)=>{
  setView(newview);
 }
   const addComplain=(complain)=> {
      console.log(complain);
     axios.post('',complain).then(res=>console.log('passed')).catch(err=>console.log(err))
    }
  if (view === "AllComplains") {
    return <AllComplains data={data} changeView={changeView}/>;
  } else if (view === "OneComplain") {
    return <OneComplain  />;
  } 
  else if (view === "createComplain") {
    return <CreateComplain addComplain={addComplain} />;
  }

}

export default App;







