import React from "react";
import { useEffect, useState } from "react";
import AllComplains from "./components/AllComplains.jsx";
import exampleData from "./dummydata";
import OneComplain from "./components/OneComplain.jsx";
import CreateComplain from "./components/CreateComplain.jsx";
import axios from "axios";
import "./index.css";
import "./App.css";

let App = () => {
  const [view, setView] = useState("createComplain");
  const [data, setData] = useState(exampleData);
  //  useEffect(() => {
  //    axios.get("").then((res) => {
  //      setData(res.data);
  //    });
  //  }, []);
  const changeView = (newview) => {
    setView(newview);
  };
  const addComplain = (complain) => {
    console.log(complain);
    axios
      .post("", complain)
      .then((res) => console.log("passed"))
      .catch((err) => console.log(err));
  };
  return (
    <>
          <div>
        <nav className=" nav">
          <div
            className={
              view !== "createcomplain"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              setView("createcomplain");
            }}
          >
            Create Post
          </div>
          <div
            className={
              view === "allcomplains" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => {
              setView("allcomplains");
              // console.log(this.state)
            
            }}
          >
            All Posts
          </div>
         
        </nav>

      </div>
  
      {view === "AllComplains" && (
        <AllComplains data={data} changeView={changeView} />
      )}
      {view === "OneComplain" && <OneComplain />}
      {view === "createComplain" && (
        <CreateComplain addComplain={addComplain} />
      )}
    </>
  );
};

export default App;
