const Note = require("../models/noteModel");

//retrieve all notes
exports.getAllNodes = async (req, res) => {
  try {
    const response = await Note.find();
    res.json({ response });
  } catch (error) {
    res.status(500).json({
      error:
        "ERROR 500: Internal Server Error, failed to retrieve the notes: " +
        error.message,
    });
  }
};

// add a new note
exports.addNewNote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    const response = await note.save();
    res.status(201).json({ response });
  } catch (error) {
    res.status(400).json({
      error:
        "ERROR 400: Bad Request, failed to add the new note: " + error.message,
    });
  }
};

//delete a specific note using its ID
exports.deleteNode = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Note.findByIdAndDelete(id);
    if (!response) {
      return res
        .status(404)
        .json({ error: "ERROR 400: Not Found: Note not found" });
    }
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error:
        "ERROR 500: Internal Server Error, failed to delete note: " +
        error.message,
    });
  }
};

//update a specific note using its ID
exports.updateNode = async (req, res) => {
  try {
    const id = req.params.id;
    let updatedNote = {
      title: req.body.title,
      content: req.body.content,
    };
    const response = await Note.findByIdAndUpdate(id, updatedNote, {
      new: true,
    });
    if (!response) {
      return res
        .status(404)
        .json({ error: "ERROR 404: Not Found, note was not found" });
    }
    res.json(response);
  } catch (error) {
    res.status(400).json({
      error:
        "ERROR 400: Bad Request, failed to update the note: " + error.message,
    });
  }
};