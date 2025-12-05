export function getAllNotes(req,res){
    res.status(200).send("Hello you are in right path but ");
}

export function createNotes(req,res){
    res.status(201).json({Message:"Notes Created Successfully"})
}

export function UpdateNotes(req,res){
      res.status(200).json({Message:"Notes Updated Successfully"})
}
export function deleteNotes(req,res){
        res.status(200).json({Message:"Notes Deleted Successfully"})
}