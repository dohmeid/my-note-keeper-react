import React, { useState, useEffect } from "react";
import classes from "./AddNote.module.css";

const AddNote = ({ notesArray, setNotesArray }) => {
  //STATES & HOOKS------------------------------------------------------------------
  const [isExpanded, setIsExpanded] = useState(false); //to expand the form when clicking on it
  const [rows, setRows] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    errors: false,
  });

  useEffect(() => {
    console.log("in AddNote.js");
    console.log(notesArray);
  }, []); // Empty dependency array means this effect runs once after the initial render

  //EVENT LISTENERS----------------------------------------------------------------
  //this function activates when the user clicks on the Form
  const handleFormClick = () => {
    setIsExpanded(true); //add the input feilds
    setRows(4); //expand the take a note feild
  };

  //this function activates when the user clicks on Done button - to submit the form
  const handleFormSubmission = (e) => {
    e.preventDefault(); //stop the default behaviour of submitting the input's values to the website url

    if (validateForm()) {
      // Form is valid, submit data
      console.log("entered form data = ");
      console.log(formData);
      
     setNotesArray([ 
    ...notesArray, // that contains all the old items
    { title: formData.title, content: formData.content, date:"15/5/2024" } // and one new item at the end
  ]
);

      setIsExpanded(false);
      setRows(1);
      setFormData((prevState) => ({ ...prevState, title: "", content: "" })); //reset the form input fields
    } else {
      // Form is invalid, do nothing
      alert("Form is invalid - empty inputs are not allowed")
    }
  };

  //this function activates when the user clicks on Close button
  const handleCloseButtonClick = (e) => {
    console.log("handleCloseButtonClick - close button click");

    e.stopPropagation(); //stop the event from propagating up to the form

    //close the form input feilds & close the take a note feild
    setIsExpanded(false);
    setRows(1);
    setFormData((prevState) => ({ ...prevState, title: "", content: "" })); //reset the form input fields
    console.log("reset form data = ");
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //FUNCTIONS----------------------------------------------------------------------
  //this function validates the form input fields
  const validateForm = () => {
    let errors = false;

    // Check if inputs are empty or spaces
    if (
      formData.title.trim().length === 0 ||
      formData.content.trim().length === 0
    ) {
      errors = true;
    }

    setFormData((prevState) => ({ ...prevState, errors })); //update the state
    return errors === false; //reture true if the form is valid -no errors
  };

  //JSX CODE---------------------------------------------------------------
  return (
    <form onClick={handleFormClick} onSubmit={handleFormSubmission}>
      {isExpanded && (
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        ></input>
      )}

      <textarea
        name="content"
        placeholder="Take a note..."
        rows={rows}
        value={formData.content}
        onChange={handleChange}
        required
      ></textarea>

      {isExpanded && (
        <div className={classes.buttons}>
          <button
            className={classes.closeBtn}
            type="reset"
            onClick={handleCloseButtonClick}
          >
            Close
          </button>
          <button className={classes.doneBtn} type="submit">
            Done
          </button>
        </div>
      )}
    </form>
  );
};

export default AddNote;
