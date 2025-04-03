// import express from "express";
// import bcrypt from "bcryptjs";
// import User from "../models/userModel.js";
// import jwt from "jsonwebtoken";

// const login =async(req,res)=>{
//     try{
//         const{email,password}=req.body;
//         const existingUser=await User.findOne({email:email});
//         if(!existingUser){
//             return res.status(400).json({message:"User not found"})
//         }
//         const isPasswordCorrect=await bcrypt.compare(password,existingUser.password);
//         if(!isPasswordCorrect){
//             return res.status(400).json({message:"Invalid Password"})
//         }
//         const token=jwt.sign({id:existingUser._id, email:existingUser.email},process.env.JWT_SECRET,{expiresIn:"1h"},
//         );
//         res.status(200).json({message:"Login successfully",token})
//     }catch(error){
//         res.status(500).json({error:error.message||"Something went wrong"})
//     }
// }
// export default login;





import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const login =async(req,res)=>{
    try{
        const{email,password}=req.body;
        const existingUser=await User.findOne({email:email});
        
        if(!existingUser){
            return res.status(400).json({message:"User not found"})
        }
        const isPasswordCorrect=await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid Password"})
        }
        const token=jwt.sign({id:existingUser._id, email:existingUser.email},process.env.JWT_SECRET,{expiresIn:"1h"},
        );
        // res.status(200).json({message:"Login successfully",token})
        res.status(200).json({
            message: "Login successfully",
            token,
            email: existingUser.email  
        });
        
    }catch(error){
        res.status(500).json({error:error.message||"Something went wrong"})
    }
}
export default login;





