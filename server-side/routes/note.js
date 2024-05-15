const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const noteController = require("../../controllers/noteController");

// Middleware
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost/notes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
    process.exit();
  });

app.use(express.json()); //accept the data in JSON format
app.use("/notes", notesRoute); //set up the routes middleware

//retrieve all notes
app.get("/", noteController.getAllNodes);

// add a new note
app.post("/", noteController.addNewNote);

//delete a specific note using its ID
app.delete("/:id", noteController.deleteNode);

//update a specific note using its ID
app.put("/:id", noteController.updateNode);

//start the server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
