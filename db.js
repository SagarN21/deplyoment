const mongoose = require("mongoose")


let connection = mongoose.connect("mongodb+srv://karwarbinaga:naik@cluster0.2bgrrri.mongodb.net/?retryWrites=true&w=majority")


module.exports = {
    connection
}