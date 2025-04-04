import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app=express();
const port=process.env.PORT||5000;

const mongoURL=process.env.MONGODB_URL;

mongoose.connect(mongoURL)
.then(()=>{
    console.log("MongoDB connectd successfully")
})
.catch((err)=>{
    console.log("MongoDB connection failed",err.message)
})
// app.use(cors());
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/user",userRoute);

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
})