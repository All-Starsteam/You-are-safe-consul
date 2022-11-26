const express = require("express");
const cors = require("cors");
const { post, user, government } = require("./database/index.js");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;

app.post("/uas", (req, res) => {
  post.create(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get(`/api/gettopic/:topic`, (req, res) => {
  post.find({ topic: req.params.topic }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get(`/api/getname/:name`, (req, res) => {
  post.find({ username: req.params.name }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get(`/api/getplacement/:placement`, (req, res) => {
  post.find({ placement: req.params.placement }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/api/posts", (req, res) => {
  post.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.delete("/api/delete/:id", (req, res) => {
  post.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.put(`/api/update/:id`, (req, res) => {
  post.updateOne({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.put("/api/updateupvotes/:id", (req, res) => {


    post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { upVote: 1 } },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      }
    );
  })
  app.put("/api/updatedownvotes/:id", (req, res) => {
    post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { downVote: 1 } },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }

      });
    });
    app.delete('/api/:id', (req, res) => {
      post.deleteOne({_id:req.params.id}, (err, result) => {

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

