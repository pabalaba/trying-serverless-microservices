const serverless = require("serverless-http");
const express = require("express");

const app = express();

app.put('/videos/:id',(req, res) => {
  try{
    return res.status(204).json();
  }catch(err){
    return res.status(500)
            .json({message: err.message});
  }
})

module.exports.put = serverless(app);