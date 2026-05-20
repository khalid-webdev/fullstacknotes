
const Note = require("../models/noteModel");





//create notes
const createNoteService = async(payload)=>{
  return await new Note(payload).save();
}

//get notes
const getNoteService=async({page,limit,search})=>{

  const query = {};
  if(search){
    query.title = {$regex:search,$options:"i"}
  }

  const skip =(page-1) * limit;

  const notes =await Note.find(query).sort({createdAt:-1}).skip(skip).limit(limit);
  const totalNotes = await Note.countDocuments(query);

  return {
    notes,
    totalNotes
  }
}

//update notes

const updateNoteService = async(id,payload)=>{
 return await Note.findByIdAndUpdate(id,payload,{new:true, runValidators:true});
}

// delete notes
const deleteNoteService = async(id)=>{
  return await Note.findByIdAndDelete(id);
}

module.exports = {
  createNoteService,getNoteService,updateNoteService,deleteNoteService
}
