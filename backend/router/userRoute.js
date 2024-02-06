const express = require("express");
const app = express();
const User = require("../models/userDataModel");
const router = express.Router();
app.use(express.json())

//get all
router.get("/", async (req,res)=>{

       try {
        const showAll = await User.find();

        res.status(200).json(showAll);
       } catch (error) {
            console.log("error");
            res.status(400).json({error: error.message});
       }
})

//get single
router.get("/:id", async (req,res)=>{
    const { id } = req.params;
    try {
        const singleUser = await User.findById({ _id: id });
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
})

//put
router.post("/", async (req,res)=>{

    const {name,email,age} = req.body;
    
    try {
        const addUser = await User.create({
            name:name,
            email:email,
            age:age,
    })
    res.status(200).json(addUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})
    }
})

//delete
router.delete("/:id", async (req,res)=>{
    const {id} = req.params;

    try {
        const deleteUser = await User.findByIdAndDelete({ _id: id});
        res.status(201).json(deleteUser);

    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
    }
})

//patch/put/update
router.patch("/:id",async  (req,res)=>{
    const {id} = req.params;
    const {name,email,age} = req.body;

    try {
        const updateOld = await User.findByIdAndUpdate(id, req.body,{
            new:true,
        });
        res.status(200).json(updateOld);
    } catch (error) {
        console.log(error);
        req.status(500).json({error: error.message});
    }
})

module.exports = router;

