const mongoose = require("mongoose");


const notesSchema = mongoose.Schema({
    title:String,
    body:String,
    author:String,
    category:String,
    authorId: String,
  userName: String
},{
    versionKey:false
})

const notesModel = mongoose.model("note",notesSchema)


module.exports = {
    notesModel
}