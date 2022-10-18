const serverless = require("serverless-http");
const express = require("express");

const app = express();

app.get('/videos',(req, res) => {
  try{
    return res.status(200)
    .json({data: []});
  }catch(err){
    return res.status(500)
            .json({message: err.message});
  }
});

module.exports.getmany = serverless(app);