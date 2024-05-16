import React , { useState }from "react";
import classes from "./EditDialog.module.css";

const EditDialog = ({noteData, setShowEdit,handleCloseButtonClick,  setNewNotesArray, originalNotesArray, setOriginalNotesArray}) => {

  const [formData, setFormData] = useState({
    newTitle: noteData.title,
    newContent: noteData.content,
    newDate: noteData.date,
    errors: false,
  });

  //****************************EVENT LISTENERS****************************
  //this function activates when the user clicks on Done button - to submit the form
  const handleFormSubmission = (e) => {
    e.preventDefault(); //stop the default behaviour of submitting the input's values to the website url

    if (isFormValid()) {
      //the form is valid, submit data
      //console.log("entered form data = ");
      //console.log(formData);

      const newArray = originalNotesArray.map((note) => {
        if ( note.title === noteData.title && note.content === noteData.content && note.date === noteData.date) {
          return {
            title: formData.newTitle,
            content: formData.newContent,
            date: formData.newDate,};
        } 
        else {
          return note;
        }
      });

      setOriginalNotesArray(newArray);
      setNewNotesArray(newArray);
      setShowEdit(false);
    } 
    else {
      //the form is invalid, do nothing
      alert("Form is invalid - empty inputs are not allowed");
    }
  };

  //this function updates the formData when the form inputs change
  const handleFormInputsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //****************************FUNCTIONS**********************************
  //this function validates the form input fields
  const isFormValid = () => {
    let errors = false;
    //check if inputs are empty or spaces
    if (
      formData.newTitle.trim().length === 0 || formData.newContent.trim().length === 0 ||
      formData.newDate === null || formData.newDate === ""
    ) {
      errors = true;
    }

    setFormData((prevState) => ({ ...prevState, errors })); //update the state
    return errors === false; //reture true if the form is valid -no errors
  };
  
  //****************************JSX CODE**********************************
  return (
    <form className={classes.editDialog} onSubmit={handleFormSubmission}>
      <input
        type="text"
        placeholder="Title"
        name="newTitle"
        value={formData.newTitle}
        onChange={handleFormInputsChange}
        required
      ></input>

      <textarea
        name="newContent"
        placeholder="Take a note..."
        rows="4"
        value={formData.newContent}
        onChange={handleFormInputsChange}
        required
      ></textarea>

      <input
        type="date"
        placeholder="Date"
        name="newDate"
        className="date"
        value={formData.newDate}
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
