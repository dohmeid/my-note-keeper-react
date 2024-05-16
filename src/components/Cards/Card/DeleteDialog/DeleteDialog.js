import React from "react";
import classes from "./DeleteDialog.module.css";

const DeleteDialog = ({ handleCloseButtonClick, handleDeleteButtonClick }) => {

  return (
    <div className={classes.deleteDialog}>
      <h2>Note Deletion</h2>
      <h3>Are you certain you wish to delete this Note?</h3>

      <div className="buttons">
        <button
          type="button"
          onClick={handleCloseButtonClick}
        >
        Close</button>

        <button
          className="deleteBtn"
          type="button"
          onClick={handleDeleteButtonClick}
        >
        Delete</button>
      </div>
    </div>
  );
};

export default DeleteDialog;
