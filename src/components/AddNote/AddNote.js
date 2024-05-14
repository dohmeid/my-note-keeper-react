import React, { useState } from "react";
import classes from "./AddNote.module.css";

const AddNote = () => {
  //STATES & HOOKS------------------------------------------------------------------
  const [isExpanded, setIsExpanded] = useState(false);

  const expandForm = () => {
    setIsExpanded(true);
  };

  return (
    <form id="task-note" onClick={expandForm}>
      {isExpanded ? (
        <div className={classes.formInputs}>
          <input type="text" placeholder="Title"></input>
          <textarea placeholder="Take a note..."></textarea>
          <div className={classes.buttons}>
            <button className={classes.closeBtn}>Close</button>
            <button className={classes.doneBtn}>Done</button>
          </div>
        </div>
      ) : (
        <p>Take a note...</p>
      )}
    </form>
  );
};

export default AddNote;
