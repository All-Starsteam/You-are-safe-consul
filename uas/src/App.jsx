import './index.css'

// function App() {
//   return (
//     <div >
      
//       <h1>All stars starts not here</h1>
//     </div>
//   );
// }

// export default App;
import React from "react";

import AllComplains from "./components/AllComplains.jsx";

import exampleData from "../../dummydata";
import OneComplain from "./components/OneComplain.jsx";
import CreatePost from "./components/CreatePost.jsx";
// import axios from "axios";

class App extends React.Component {
  constructor(props) {
    //The super keyword is used to call functions on an object's parent, including its constructor.
    // super keyword must be used before the this keyword is used in constructor .
    super(props);
    //Invoking super() calls the parent class constructor. If you want to pass some arguments in a class's constructor to its parent's constructor, you call it with super(arguments).
    this.state = {
      username: window.location.search.substring(10), //DO NOT EDIT THIS LINE
      view: "AllComplains",
      data: exampleData,
      OneComplain: {},
      
      persons: "",
    };
    this.changeView = this.changeView.bind(this);
    this.getData = this.getData.bind(this);
    this.addPost = this.addPost.bind(this);
    
  }

  changeView(view) {
    this.setState({
      view: view,
    });
  }
  getData(blog) {
    console.log(blog);
    this.setState({
      OneComplain: blog,
    });
    this.changeView("OneComplain");
  }
  addPost(blog) {
    console.log(blog, "hhhhhhhhhhh");
    this.setState({
      data: [blog, ...this.state.data],
    });
    this.changeView("AllComplains");
  }
  
  // componentDidMount() {
  //   axios
  //     .post(`https://blog-server-rbk.herokuapp.com/api/blogs`, {blog: "test"})
  //     .then((response) => console.log(response));
    // .then(res => {
    //   const persons = res.data;
    //    console.log(persons);
    //    var newData=persons.filter(
    //     (e)=>e.title && e.body && e.imageUrl && e.author
    //    );
    //    date=20
    //   //  var result=persons.filter()
    //   this.setState({
    //      data : data.concat(newData) });
    //   //data : [...this.state.data, ...persons]
    //   return "hello";
    // })
  //}

  renderView() {
    if (this.state.view === "AllComplains") {
      return <AllComplains data={this.state.data} getData={this.getData} />;
      }
     else if (this.state.view === "OneComplain") {
      return <OneComplain data={this.state.OneComplain} />;
    } else if (this.state.view === "createPost") {
      return <CreatePost addPost={this.addPost} />;
    }
  
}

  render() {
    return (
      <div>
        <nav className=" nav">
          <div
            className={
              this.state.view !== "createPost"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              this.changeView("createPost");
            }}
          >
            Create Post
          </div>
          <div
            className={
              this.state.view === "AllComplains" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => {
              this.changeView("AllComplains");
              // console.log(this.state)
          
            }}
          >
            All Posts
          </div>
         
        </nav>

        {this.renderView()}
      </div>
    );
  }
}

export default App;

