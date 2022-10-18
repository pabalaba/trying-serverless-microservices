const serverless = require("serverless-http");
const express = require("express");

const app = express();

app.post('/videos',(req, res) => {
  try{
    return res.status(201)
    .json({id: "123-abc-!@#"});
  }catch(err){
    return res.status(500)
            .json({message: err.message});
  }
})

module.exports.post = serverless(app);