const userModel = require('../models/user.model.js');
const bcrypt=require('bcrypt');
const controller={
    register:async (req,res)=>{
        try{
        const {name,email,password}=req.body;
        console.log(email);
        const y=await bcrypt.hash(password,10);
        const User=await userModel.create({
            name,
            email,
            password:y
        })
        res.json({message:"User created successfully",name});
        
    }catch(error){
        console.log("Error at register",error);
        res.json("Internal server error")
    }
    },
    login:async(req,res)=>{
        try{
            const {email,password}=req.body;
            const User=await userModel.findOne({email})
            if(!User){
                res.json('User not found')
            }
            else{

                if( await bcrypt.compare (password,User.password)){
                    res.json('logged in');
                }
                else{
                    res.json('Password Incorrect.try again');
                }
            }

        }
        catch(error){
            console.log('Error loggingin',error);
            res.json('Internal Server Error');
        }
    }
}
module.exports=controller;
