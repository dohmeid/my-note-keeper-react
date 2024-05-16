import React, { useState } from "react";
import { addNote } from "../../services/API/NotesApi";
import { fetchData, isFormValid } from "../../services/Utility/Utils";

const AddDialog = ({ setNotesArray }) => {

  //****************************STATES & HOOKS**********************************
  const [isFormExpanded, setIsFormExpanded] = useState(false); //to expand the form when clicking on it
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    errors: false,
  });

  //****************************EVENT LISTENERS****************************
  //this function activates when the user clicks on the Form
  const handleFormClick = () => {
    setIsFormExpanded(true); //add the input feilds
  };

  //this function activates when the user clicks on Done button - to submit the form
  const handleFormSubmission = async (e) => {
    e.preventDefault(); //stop the default behaviour of submitting the input's values to the website url

    if (isFormValid(formData, setFormData, false)) {
      let newNote = {
        "title": formData.title,
        "content": formData.content,
      }

      try {
        await addNote(newNote);
        fetchData(setNotesArray);
      } catch (error) {
        console.error("Error adding the note:", error);
      }

      resetForm();
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

  //this function activates when the user clicks on Close button
  const handleCloseButtonClick = (e) => {
    e.stopPropagation();      //stop the event from propagating up to the form
    resetForm();
  };

  //this function resets the form inputs and collapse it
  const resetForm = () => {
    setIsFormExpanded(false);     //close the form input feilds & close the take a note feild
    setFormData((prevState) => ({ ...prevState, title: "", content: "" })); //reset the form input fields
  }

  //****************************JSX CODE**********************************
  return (
    <form onClick={handleFormClick} onSubmit={handleFormSubmission}>

      {isFormExpanded && (
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleFormInputsChange}
          required
        ></input>
      )}

      <textarea
        name="content"
        placeholder="Take a note..."
        rows={isFormExpanded ? 4 : 1}
        value={formData.content}
        onChange={handleFormInputsChange}
        required
      ></textarea>

      {isFormExpanded && (
        <div className="buttons">
          <button
            className="closeBtn"
            type="reset"
            onClick={handleCloseButtonClick}>Close</button>

          <button type="submit">Done</button>
        </div>
      )}

    </form>
  );
};

export default AddDialog;
