import Note from "../models/Note.js"

export  const getAllNotes=async(req,res)=>{
   try{
      const notes=await Note.find()
       res.status(200).json(notes);
   } 
   catch(error){
      console.error("error in getting all notes in controller",error);
      res.status(500).json({message:"internal server error"});
   }
 }

 export const createNotes=async(req,res)=>{
   try{
      const{title,content}=req.body
      const newNote=new Note({title,content});
      await newNote.save();
      res.status(201).json({message:"note created successfully"});
   }catch(error){
      console.error("error in creating note in controller",error);
      res.status(500).json({message:"error in creating note"});
   }
}

 export const updateNotes=async(req,res)=>{
    res.status(200).send("you updated the notes");
 }

 export const deleteNotes=async(req,res)=>{
    res.status(200).send("you deleted the notes");
 }
//alternative fun declartion   
//export function getAllNotes(req,res){
//     res.status(200).send("you fetched the notes");
//  }