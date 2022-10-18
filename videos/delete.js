const serverless = require("serverless-http");
const express = require("express");

const app = express();

app.delete('/videos/:id',(req, res) => {
  console.log(req.params.id);
  try{
    return res.status(204);
  }catch(err){
    return res.status(500)
            .json({message: err.message});
  }
})

module.exports.delete = serverless(app);
