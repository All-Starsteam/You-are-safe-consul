const express = require("express")
const cors= require('cors')
const post =require('./database/index.js')
const app =express()
app.use(cors())
app.use(express.json())
const PORT =4000

app.post("/uas", (req, res) => {
  post.create(req.body ,(err, result) => {
        
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      })
//     .then(console.log(req.body, "created"))
//     .catch((err) => console.log(err));
//   console.log(req.body);
//   res.json("post");
});
app.get("/api/posts",   (req, res) => {
    post.find({}, (err, result) => {
        
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      });
    });
    app.put(`/api/update/:id`,(req,res)=>{
        post.updateOne({_id:req.params.id},req.body, (err, result) => {
        
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      })
    })
app.listen(PORT,()=>{
    console.log(`server connected to localhost:${PORT}`)
})