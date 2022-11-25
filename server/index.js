const express = require("express")
const cors= require('cors')

const app =express()
app.use(cors())
app.use(express.json())
const PORT =4000
app.get('/uas',(req,res)=>{
    console.log('get request');
    res.json('get')
})
app.post("/uas", (req, res) => {
  console.log("post request");
     res.json("post");

});

app.listen(PORT,()=>{
    console.log(`server connected to localhost:${PORT}`)
})