const mongoose = require("mongoose");
mongoose
  .connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("conected "))
  .catch((err) => console.log(err));

let repoSchema = mongoose.Schema({
    username:{type:string,default:'annonymous',require :false,},
    topic:string ,
    ipAdresse:String,
    content:string,
    placement:string
});
let save = (repo) => {
  Repo.create(repo).then(
    console.log(repo,'created')
  ).catch(err=>console.log(err))
  
};
let Repo = mongoose.model("Repo", repoSchema);

module.exports = {Repo,save};