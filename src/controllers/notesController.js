import Note from "../models/Note.js"

export  const getAllNotes=async(req,res)=>{
   try{
      const notes=await Note.find()
       res.status(200).json(notes);
   } 
   catch(error){
      console.error("error in getting all notes in controller",error);
      res.ststus(500).json({message:"internal server error"});
   }
 }

 export const createNotes=async(req,res)=>{
    res.status(201).send("you created the notes");
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