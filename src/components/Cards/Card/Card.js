import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = ({
  noteData,
  setNewNotesArray,
  originalNotesArray,
  setOriginalNotesArray,
}) => {
  //****************************STATES & HOOKS**********************************
  const { title, content, date } = noteData;
  const [showDelete, setShowDelete] = useState(false);

  /*
const [originalNotesArray, setOriginalNotesArray] = useState(NOTES); //this state is initialized to the original notes array from the API
  const [ setNewNotesArray] = useState(NOTES); /
  */

  //****************************EVENT LISTENERS****************************
  //this function activates when the user clicks on the Note Card
  const handleNoteClick = (e) => {};

  //this function activates when the user clicks on the trash icon
  const handleTrashIconClick = (e) => {
    setShowDelete(true);
  };

  //this function activates when the user clicks on Close button
  const handleCloseButtonClick = (e) => {
    console.log("close button was click");
    e.stopPropagation();
    setShowDelete(false);
  };

  //the delete button was clicked
  const handleDeleteButtonClick = (e) => {
    console.log("delete button was clicked");
    console.log("before");
    console.log(originalNotesArray);

    //delete the current note from the notes list
    setOriginalNotesArray(
      originalNotesArray.filter(
        (note) =>
          note.title !== title &&
          note.content !== content
      )
    );

    setNewNotesArray(
      originalNotesArray.filter(
        (note) =>
          note.title !== title &&
          note.content !== content
      )
    );

    console.log("after");
    console.log(originalNotesArray);

    setShowDelete(false);
  };

  //****************************FUNCTIONS**********************************

  //****************************JSX CODE**********************************
  return (
    <>
      <div className={classes.card} onClick={handleNoteClick}>
        <h4>{title}</h4>
        <h3>{content}</h3>
        <h5>{date}</h5>
        <i className="bi bi-trash" onClick={handleTrashIconClick}></i>
      </div>

      {showDelete && (
        <div className={classes.deleteArea}>
          <h2>Note Deletion</h2>
          <h3>Are you certain you wish to delete this Note?</h3>
          <div className={classes.buttons}>
            <button
              className={classes.closeBtn}
              type="button"
              onClick={handleCloseButtonClick}
            >
              Close
            </button>
            <button
              className={classes.deleteBtn}
              type="button"
              id="deleteBtn"
              onClick={handleDeleteButtonClick}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
