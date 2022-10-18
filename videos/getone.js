const serverless = require("serverless-http");
const express = require("express");

const app = express();

app.get('/videos/:id',(req, res) => {
  try{
    return res.status(200)
    .json({data: req.params.id});
  }catch(err){
    return res.status(500)
            .json({message: err.message});
  }
});

module.exports.getone = serverless(app);