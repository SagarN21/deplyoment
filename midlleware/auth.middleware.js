const jwt = require("jsonwebtoken");


const auth = (req,res,next)=>{
    const token = req.headers.authorization;


        if(token)
        {
            try {
                const decode = jwt.verify(token,"masai")
               
                if(decode)
                {
               
                   console.log(req.body)
                
                    req.body.authorId = decode.authorID;
                    req.body.userName = decode.authorName;
                   
                    next()
                }
                
            } catch (error) {

                res.send(error.message)
                
            }
          
    
        
        }

        else
        {
            res.send("error")
        }
        
   
    

   
}

module.exports ={
    auth
}