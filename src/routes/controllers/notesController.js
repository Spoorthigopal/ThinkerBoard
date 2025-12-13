export const getAllNotes=(req,res)=>{
    res.status(200).send("you fetched the notes");
 }

 export const createNotes=(req,res)=>{
    res.status(201).send("you created the notes");
 }

 export const updateNotes=(req,res)=>{
    res.status(200).send("you updated the notes");
 }

 export const deleteNotes=(req,res)=>{
    res.status(200).send("you deleted the notes");
 }
//alternative fun declartion   
//export function getAllNotes(req,res){
//     res.status(200).send("you fetched the notes");
//  }