import express, { Router } from 'express'
import { createNotes, deleteNotes, getAllNotes, UpdateNotes } from '../controllers/notesController';

const router=express.Router();

router.get("/",getAllNotes)

router.post("/",createNotes)

router.put("/:id",UpdateNotes)

router.delete("/:id",deleteNotes)


export default router;


