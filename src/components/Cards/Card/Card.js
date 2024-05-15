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
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({
    newTitle: title,
    newContent: content,
    newDate: date,
    errors: false,
  });

  //****************************EVENT LISTENERS****************************

  //edit function------------------------------------------------
  //this function activates when the user clicks on the Note Card
  const handleNoteClick = (e) => {
    setShowEdit(true);
  };

  const validateForm = () => {
    let errors = false;

    // Check if inputs are empty or spaces
    if (
      formData.newTitle.trim().length === 0 ||
      formData.newContent.trim().length === 0 ||
      formData.newDate === null ||
      formData.newDate === ""
    ) {
      errors = true;
    }

    setFormData((prevState) => ({ ...prevState, errors })); //update the state
    return errors === false; //reture true if the form is valid -no errors
  };

  //this function activates when the user clicks on Done button - to submit the form
  const handleFormSubmission = (e) => {
    e.preventDefault(); //stop the default behaviour of submitting the input's values to the website url

    if (validateForm()) {
      // Form is valid, submit data
      console.log("entered form data = ");
      console.log(formData);

      const newArray = originalNotesArray.map((note) => {
        if (
          note.title === title &&
          note.content === content &&
          note.date === date
        ) {
          // Increment the clicked counter
          return {
            title: formData.newTitle,
            content: formData.newContent,
            date: formData.newDate,
          };
        } else {
          return note;
        }
      });
      setOriginalNotesArray(newArray);
      setNewNotesArray(newArray);
      setShowEdit(false);
    } else {
      // Form is invalid, do nothing
      alert("Form is invalid - empty inputs are not allowed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //delete functions----------------------------------------------
  //this function activates when the user clicks on the trash icon
  const handleTrashIconClick = (e) => {
    e.stopPropagation();
    setShowDelete(true);
  };

  //this function activates when the user clicks on Close button
  const handleCloseButtonClick = (e) => {
    console.log("close button was click");
    setShowDelete(false);
    setShowEdit(false);
  };

  //the delete button was clicked
  const handleDeleteButtonClick = (e) => {
    console.log("delete button was clicked");
    console.log("before");
    console.log(originalNotesArray);

    //delete the current note from the notes list
    setOriginalNotesArray(
      originalNotesArray.filter(
        (note) => note.title !== title && note.content !== content
      )
    );

    setNewNotesArray(
      originalNotesArray.filter(
        (note) => note.title !== title && note.content !== content
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

      {showEdit && (
        <form className={classes.deleteArea} onSubmit={handleFormSubmission}>
          <input
            type="text"
            placeholder="Title"
            name="newTitle"
            value={formData.newTitle}
            onChange={handleChange}
            required
          ></input>

          <textarea
            name="newContent"
            placeholder="Take a note..."
            rows="4"
            value={formData.newContent}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="date"
            placeholder="Date"
            name="newDate"
            value={formData.newDate}
            min="2020-01-01"
            max="2025-01-01"
            onChange={handleChange}
            required
          ></input>

          <div className={classes.buttons}>
            <button
              className={classes.closeBtn}
              type="button"
              onClick={handleCloseButtonClick}
            >
              Close
            </button>
            <button className={classes.doneBtn} type="submit">
              Done
            </button>
          </div>
        </form>
      )}

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
