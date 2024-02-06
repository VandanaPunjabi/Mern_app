const express = require("express");
const app = express();
const router = require("./router/userRoute")
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/merndb").then(()=>{
     console.log("connected");
}).catch((error)=>{
      console.log("error", error);
})


app.use(router);
app.listen(4000);