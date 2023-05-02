const express = require("express");

const {userModel} = require("../Model/userModel")
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

const bcrypt = require("bcryptjs")





userRouter.post("/register",async(req,res)=>{
 
    try {
        const user = new userModel(req.body)
        bcrypt.hash(user.password, 5, async function (err, hash) {
                 
            if(hash)
            {
                user.password=hash;
                await user.save()
                res.send({"msg":"user has been registered"})
            }

            else
            {
                res.send(err)
            }
        })
      ;
    
   
        
    } catch (error) {
        res.send({"err":error.message})
        
    }
    

})

userRouter.post("/login",async(req,res)=>{

    try {
        

        const {email,password} = new userModel(req.body);
        const user = await userModel.findOne({email});
       
        bcrypt.compare(password, user.password, function(err, out) {
            // res === true
            if(out===true)
            {
                var token = jwt.sign({ authorID:user._id,authorName:user.author }, 'masai');
                res.send({"msg":"login successfull","token":token})
            }
            else
            {
                res.status(200).send({"msg":"invalid credentials","err":err})
            }
        });

       
        
    } catch (error) {
        res.status(400).send(error.message)
    }

})

module.exports={
    userRouter
}