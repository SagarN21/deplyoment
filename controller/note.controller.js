
const express = require ("express");
const {notesModel} = require("../Model/notesModel")



const notesRouter = express.Router();

notesRouter.get('/', async(req,res)=>{

    console.log(req.body)
    const data = await notesModel.find({authorId:req.body.authorId})
    res.send(data)
})

notesRouter.post("/create",async (req,res)=>{
    try {

      const notes = new  notesModel(req.body);
      console.log("notes",notes)

      await notes.save()

        res.send("created")
    } catch (error) {
        res.send(error)
    }
    
})


notesRouter.patch("/update/:id", async (req,res)=>{
    const {id} = req.params;

     
     try {
        await notesModel.findByIdAndUpdate(id,req.body)
        res.send("data has been added")
        
     } catch (error) {

        res.send({"err":error})
        
     }
})

notesRouter.delete("/delete/:id",async (req,res)=>{
    const {id} = req.params

    try {

        await notesModel.findByIdAndDelete(id)
        res.send({"msg":"data has been deleted"})
        
    } catch (error) {
        res.send({"err":error})
    }

})


module.exports = {
    notesRouter
}