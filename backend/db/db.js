const mongoose= require('mongoose');
const connectToDB=()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected");

    }catch(e){
        console.log("error at connection");
    }
}
module.exports = connectToDB;