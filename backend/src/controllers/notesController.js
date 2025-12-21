import Note from "../models/Note.js"

export  const getAllNotes=async(_,res)=>{
   try{
      const notes=await Note.find({createdAt:-1});
       res.status(200).json(notes);
   } 
   catch(error){
      console.error("error in getting all notes in controller",error);
      res.status(500).json({message:"internal server error"});
   }
 }
 export async function getNoteById(req,res){
   try{
      const note=await Note.findById(req.params.id)
      if(note){
         res.status(200).json(note);
      }else{
         res.status(404).json({message:"note not found"});
      }
   }catch(error){
      console.error("error in getting note by id in controller",error);
      res.status(500).json({message:"internal server error"});
   }
 }

 export const createNotes=async(req,res)=>{
   try{
      const{title,content}=req.body
      const note=new Note({title,content});
      const savednote= await note.save();
      res.status(201).json(savednote);
   }catch(error){
      console.error("error in creating note in controller",error);
      res.status(500).json({message:"error in creating note"});
   }
}

 export const updateNotes=async(req,res)=>{
    try{
      const{title,content}=req.body
      await Note.findByIdAndUpdate(req.params.id,{title,content})
      res.status(200).json({message:"note updated successfully"});
    }catch(error){
      console.error("error in updating note in controller",error);
    }
 }

 export const deleteNotes=async(req,res)=>{
   //  res.status(200).send("you deleted the notes");
    try{
      await Note.findByIdAndDelete(req.params.id)
      res.status(200).json({message:"note deleted successfully"});
    }catch(error){
      console.error("error in deleting note in controller",error);
      res.status(500).json({message:"error in deleting note"});
    }
 }
//alternative fun declartion   
//export function getAllNotes(req,res){
//     res.status(200).send("you fetched the notes");
//  }