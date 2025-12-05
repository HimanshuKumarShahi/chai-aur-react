import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import notesController from "./controllers/notesController.js"

const app=express()

const port=process.env.PORT || 3000

app.use("/api/notes",notesRoutes);


app.listen(port,()=>{
    console.log(`server on port ${port}`);
    
})