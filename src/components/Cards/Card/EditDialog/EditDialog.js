import React, { useState } from "react";
import classes from "./EditDialog.module.css";
import { updateNote } from "../../../../services/API/NotesApi";
import { fetchData, isFormValid } from "../../../../services/Utility/Utils";

const EditDialog = ({ noteData, setShowEdit, handleCloseButtonClick, setNotesArray }) => {

  const [formData, setFormData] = useState({
    title: noteData.title,
    content: noteData.content,
    creationDate: noteData.creationDate.slice(0, 10)
  });

  //****************************EVENT LISTENERS****************************
  //this function activates when the user clicks on Done button - to submit the form
  const handleFormSubmission = async (e) => {
    e.preventDefault(); //stop the default behaviour of submitting the input's values to the website url

    if (isFormValid(formData)) {
      let newNote = {
        "_id": noteData._id,
        "title": formData.title,
        "content": formData.content,
        "creationDate": formData.creationDate,
      }

      try {
        await updateNote(noteData._id, newNote);
        fetchData(setNotesArray);
      } catch (error) {
        console.error("Error deleting the note:", error);
      } finally {
        setShowEdit(false);
      }
    }
    else {
      alert("Form is invalid - empty inputs are not allowed");
    }
  };

  //this function updates the formData when the form inputs change
  const handleFormInputsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //****************************JSX CODE**********************************
  return (
    <form className={classes.editDialog} onSubmit={handleFormSubmission}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleFormInputsChange}
        required
      ></input>

      <textarea
        name="content"
        placeholder="Take a note..."
        rows="4"
        value={formData.content}
        onChange={handleFormInputsChange}
        required
      ></textarea>

      <input
        type="date"
        placeholder="Date"
        name="creationDate"
        className="date"
        value={formData.creationDate}
        min="2020-01-01"
        max="2025-01-01"
        onChange={handleFormInputsChange}
        required
      ></input>

      <div className="buttons">
        <button className="closeBtn" type="button" onClick={handleCloseButtonClick}>
          Close</button>
        <button type="submit">Done</button>
      </div>
    </form>
  );
};

export default EditDialog;
