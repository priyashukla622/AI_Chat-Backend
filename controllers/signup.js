import express from "express";
import bcrypt from "bcrypt";

import User from "../models/userModel.js";

const signup=async(req,res)=>{
    try{
        const{username, email, password}=req.body;
        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"User already exists in a db"})
        }
        const hashedPassword=await bcrypt.hash(password, 10);
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        });
        await newUser.save();
        res.status(201).json({message:"User signed up successfully"});
    }
    catch(error){
        res.status(500).json({ error: error.message || "Something went wrong!" })
    }
}
export default signup;