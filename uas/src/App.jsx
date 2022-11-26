import React from "react";
import { useEffect, useState } from "react";
import AllComplains from "./components/AllComplains.jsx";
import CreateComplain from "./components/CreateComplain.jsx";
import axios from "axios";

import "./App.css";

let App = () => {
  const [view, setView] = useState("AllComplains");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/posts").then((res) => {
      setData(res.data);
    });
  }, []);
  const deleteData = (id) =>{
    axios.delete(`http://localhost:4000/api/${id}`);
  }
  const update=(id,post)=>{
    axios.put(`/api/update/${id}`,post)
  }

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
=======
    axios
      .post("http://localhost:4000/uas", complain)
      .then((res) => console.log("passed"))
      .catch((err) => console.log(err));
  };
  if (view === "AllComplains") {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <AllComplains data={data} changeView={changeView} delete={deleteData} update={update} />
        </div>
        <button
          style={{
            height: "35px",
            width: "100px",
            position: "relative",
            top: "100px",
            left: "200px",
          }}
          onClick={() => {
            changeView("add");
          }}
        >
          add complain
        </button>
        <div style={{ display: "flex", position: "relative", top: "200px" }}>
          <button style={{ height: "35px", width: "100px" }}>rape</button>
          <button style={{ height: "35px", width: "100px" }}> violence</button>
          <br />
          <button style={{ height: "35px", width: "100px" }}>
            harrassement
          </button>
          <button style={{ height: "35px", width: "100px" }}> brakage</button>
        </div>
      </div>
    );
  }
  if (view === "add") {
    return <CreateComplain addComplain={addComplain} />;
  }

};

export default App;
