const express= require('express');
const cors=require('cors');
const app = express();
require ('dotenv').config();
app.use(express.json());
app.use(cors());
const authrouter=require('./routes/auth.route.js');
app.get('/health',(req,res)=>{
    res.json({message:'Working'})
})
app.use('/auth',authrouter);
const connectToDB=require('./db/db.js');
app.listen(8000, ()=>
{
    connectToDB();
    console.log("Server running on port http://localhost:8000");
})