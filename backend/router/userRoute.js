const User = require("../models/userDataModel");
const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const mongoose = require("mongoose")

router.get("/", async (req,res)=>{
    try {
        
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({error: error.message});
    }
})


router.post("/", async (req,res)=>{
    const {name,email,age} = req.body;
      
    try {
        const userAdded = await User.create({
            name:name,
            email:email,
            age:age,
        })
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
    }

})
module.exports = router;