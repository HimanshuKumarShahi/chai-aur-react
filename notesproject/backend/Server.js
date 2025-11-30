import express from "express";
const app=express()

const port=process.env.PORT || 3000

app.get("/api",(req,res)=>{
    res.status(200).send("Hello you are in right path but ");
});

app.post("/api/notes",(req,res)=>{
    res.status(201).json({Message:"Notes Created Successfully"})
})

app.put("/api/notes/:id",(req,res)=>{
    res.status(200).json({Message:"Notes Updated Successfully"})
})

app.delete("/api/notes/:id",(req,res)=>{
    res.status(200).json({Message:"Notes Deleted Successfully"})
})

app.listen(port,()=>{
    console.log(`server on port ${port}`);
    
})