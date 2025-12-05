import express from "express";
const app=express()

const port=process.env.PORT || 3000

app.use("/api/notes",notesRoutes)


app.listen(port,()=>{
    console.log(`server on port ${port}`);
    
})