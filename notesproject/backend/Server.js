import express from "express";
const app=express()

const port=process.env.PORT || 3000

app.get("/api",(req,res)=>{
    res.status(200).send("Hello you are in right path but ");
});

app.post("/api/notes",(req,res)=>{
    res.status(201).json({Message:"Post Created Successfully"})
})

app.put("/api/notes",(req,res)=>{
    res.status(200).json({Message:"Post Updated Successfully"})
})

app.listen(port,()=>{
    console.log(`server on port ${port}`);
    
})