//import the validators

const { createNoteSchema } = require("../validators/noteValidator");

const { createNoteService, getNoteService, updateNoteService, deleteNoteService } = require('../services/noteServices');


//create note
exports.createNote = async (req, res, next) => {
  try {
    const validateData = createNoteSchema.parse(req.body);
    const note = await createNoteService(validateData);
    res.status(201).json({ success: true, data: note })
  } catch (error) {
    next(error);
  }
};

//get notes

exports.getNotes = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 8;
    const search = req.query.search || ""

    const result = await getNoteService({ page, limit, search })
    res.status(200).json({ success: true, data: result })
  } catch (error) {
    next(error)
  }
}
