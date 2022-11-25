const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://root:root@uas.qyf1n9v.mongodb.net/UAS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("conected "))
  .catch((err) => console.log(err));

let postSchema = mongoose.Schema({
    username:{type:String,default:'annonymous',require :false,},
    topic:String ,
    ipAdresse:String,
    content:String,
    placement:String
});
let save = (repo) => {
  Repo.create(repo).then(
    console.log(repo,'created')
  ).catch(err=>console.log(err))
  
};
let post = mongoose.model("posts", postSchema);

module.exports = {post,save};
