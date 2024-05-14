import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = () => {
  //STATES & HOOKS------------------------------------------------------------------
  const [showDelete, setShowDelete] = useState(false);

  //FUNCTIONS----------------------------------------------------------------
  const openDeleteClickHandler = (e) => {
    setShowDelete(true);
    //the close button was clicked
  };

  //the close button was clicked
  const closeClickHandler = (e) => {
    setShowDelete(false);
  };

  //the delete button was clicked
  const deleteClickHandler = (e) => {
    setShowDelete(false);
  };

  //JSX CODE---------------------------------------------------------------

  return (
    <>
      <div className={classes.card}>
        <h4>Notes Keeper</h4>
        <h3>React Task</h3>
        <h5>date here</h5>
        <i className="bi bi-trash" onClick={openDeleteClickHandler}></i>
      </div>

      {showDelete && (
        <div className={classes.deleteArea}>
          <h2>Note Deletion</h2>
          <h3>Are you certain you wish to delete this Note?</h3>
          <div className={classes.buttons}>
            <button
              className={classes.closeBtn}
              type="button"
              id="closeBtn"
              onClick={closeClickHandler}
            >
              Close
            </button>
            <button
              className={classes.deleteBtn}
              type="button"
              id="deleteBtn"
              onClick={deleteClickHandler}
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
