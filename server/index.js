import express from "express";
import {chats} from "./data/data.js";
import dotenv from "dotenv";
const app=express();
dotenv.config();

app.get("/",(req,res)=>{
    res.send("API is running");
})
app.get("/api/chats",(req,res)=>{
    res.send(chats);
})

app.get("/api/chats/:id",(req,res)=>{
    const singleChat = chats.find(c=>{
        if(c._id===req.params.id){
            return res.send(c);
        }
        
    })
})


app.listen(3000, console.log("Hello"));