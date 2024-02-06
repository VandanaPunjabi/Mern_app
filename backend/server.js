const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/userRoute");
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/merndb").then(()=>{
      console.log("connected");
}).catch((error)=>{
      console.log("errror", error);
})



app.use(router);
app.listen(4000);