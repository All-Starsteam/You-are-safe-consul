const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://root:root@uas.qyf1n9v.mongodb.net/UAS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));
  
  mongoose.Promise = global.Promise;

let postSchema = mongoose.Schema({
    username:{type:String,default:'annonymous',require :false,},
    email:String,
    topic:{type:String,require :true,} ,
    
    content:{type:String,require :true,},
    placement:{type:String,require :true,},
    
    upVote:{type:Number,default:0,require :false,},
    downVote:{type:Number,default:0,require :false,}
});
let gouver=mongoose.Schema({
    placement:String,
    population:Number,
    Women:Number,
    Kids:Number
})
let users = mongoose.Schema({
  username: String,
  
  password: String,
  points: Number

  
});
let save = (repo) => {
  Repo.create(repo).then(
    console.log(repo,'created')
  ).catch(err=>console.log(err))
  
};
let government = mongoose.model("government",gouver);
let post = mongoose.model("posts", postSchema);
let user = mongoose.model("users", users);
module.exports = {post,user,government};
