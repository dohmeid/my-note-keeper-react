const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

//retrieve all notes
router.get("/", noteController.getAllNodes);

// add a new note
router.post("/", noteController.addNewNote);

//delete a specific note using its ID
router.delete("/:id", noteController.deleteNode);

//update a specific note using its ID
router.put("/:id", noteController.updateNode);

module.exports = router;