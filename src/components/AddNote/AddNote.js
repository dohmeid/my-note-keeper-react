import React from "react";
import classes from "./AddNote.module.css";

const AddNote = () => {
  return (
    <>
      <div className={classes.addNoteContainer} id="task-note">
        <input type="text" placeholder="Title"></input>
        <textarea placeholder="Take a note..."></textarea>
        <button>Close</button>
      </div>
    </>
  );
};

export default AddNote;
