import React, { useState } from "react";
import classes from "./AddNote.module.css";

const AddNote = () => {
  //STATES & HOOKS------------------------------------------------------------------
  const [isExpanded, setIsExpanded] = useState(false);
  const [rows, setRows] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //FUNCTIONS----------------------------------------------------------------
  //this function uses event delegation to handle the form click events (caused by form, cancel button and done button)
  const formClickHandler = (e) => {
    //the close button was clicked
    if (e.target.id === "closeBtn") {
      console.log("closing the note done");
      setIsExpanded(false);
      setRows(1);
      setTitle("");
      setContent("");
    }

    //the done button was clicked
    else if (e.target.id === "doneBtn") {
      if (title != "" && content != "") {
        console.log("adding the note done");
        setIsExpanded(false);
        setRows(1);
        setTitle("");
        setContent("");
      }

      //add here the post method
    }

    //the form itself was clicked for the first time
    else {
      setIsExpanded(true);
      setRows(4);
    }
  };

  //JSX CODE---------------------------------------------------------------
  return (
    <form id="task-note" onClick={formClickHandler}>
      {isExpanded && (
        <input
          type="text"
          placeholder="Title"
          name="title input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
      )}

      <textarea
        name="content input"
        placeholder="Take a note..."
        rows={rows}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>

      {isExpanded && (
        <div className={classes.buttons}>
          <button className={classes.closeBtn} type="reset" id="closeBtn">
            Close
          </button>
          <button className={classes.doneBtn} type="submit" id="doneBtn">
            Done
          </button>
        </div>
      )}
    </form>
  );
};

export default AddNote;
