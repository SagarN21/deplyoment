const express = require("express");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const cors = require("cors")

const {connection} = require("./db")
const {userRouter} = require("./controller/route.controller")
const {notesRouter} = require("./controller/note.controller")
const {auth} = require("./midlleware/auth.middleware")

const app = express();
app.use(cors())

app.use(express.json());
app.use("/users",userRouter)
app.use(auth)
app.use("/notes",notesRouter)



app.get("/",(req,res)=>{
    res.send("this is the homepage")
})


app.use(auth)

app.get("/movies",async (req,res)=>{
    
        
res.send("movie data")
  
})




app.listen(8080,async()=>{

    try {
          await connection;
          console.log("connected to db")
        console.log("litsening 8080")
        
    } catch (error) {
        console.log(error)
    }

})