import express, { Router } from 'express'

const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("Hello you are in right path but ");
})

router.post("/",(req,res)=>{
    res.status(201).json({Message:"Notes Created Successfully"})
});

router.put("/:id",(req,res)=>{
    res.status(200).json({Message:"Notes Updated Successfully"})
})

router.delete("/:id",(req,res)=>{
    res.status(200).json({Message:"Notes Deleted Successfully"})
})


export default router;

// app.get("/api",(req,res)=>{
//     res.status(200).send("Hello you are in right path but ");
// });

// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({Message:"Notes Created Successfully"})
// })

// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({Message:"Notes Updated Successfully"})
// })

// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({Message:"Notes Deleted Successfully"})
// })
