import React, { useState } from "react";

const AddDialog = ({setNewNotesArray,originalNotesArray,setOriginalNotesArray,}) => {

  //****************************STATES & HOOKS**********************************
  const [isFormExpanded, setIsFormExpanded] = useState(false); //to expand the form when clicking on it
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    errors: false,
  });

  /*useEffect(() => {
    console.log("in AddNote.js");
    console.log(originalNotesArray);
  }, []); 
 */

  //****************************EVENT LISTENERS****************************
  //this function activates when the user clicks on the Form
  const handleFormClick = () => {
    setIsFormExpanded(true); //add the input feilds
  };

  //this function activates when the user clicks on Done button - to submit the form
  const handleFormSubmission = (e) => {
    e.preventDefault(); //stop the default behaviour of submitting the input's values to the website url

    if (isFormValid()) {
      //the form is valid, submit data
      //console.log("entered form data = ");
      //console.log(formData);

      setOriginalNotesArray([
        ...originalNotesArray,
        { title: formData.title, content: formData.content, date: "15/5/2024" }, // and one new item at the end
      ]);

      setNewNotesArray([
        ...originalNotesArray, 
        { title: formData.title, content: formData.content, date: "15/5/2024" }, // and one new item at the end
      ]);
      resetForm();
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

  //this function activates when the user clicks on Close button
  const handleCloseButtonClick = (e) => {
    e.stopPropagation();      //stop the event from propagating up to the form
    resetForm();
  };

  //****************************FUNCTIONS**********************************
  //this function validates the form input fields
  const isFormValid = () => {
    let errors = false;

    // Check if inputs are empty or spaces
    if ( formData.title.trim().length === 0 || formData.content.trim().length === 0) {
      errors = true;
    }

    setFormData((prevState) => ({ ...prevState, errors })); //update the state
    return errors === false; //reture true if the form is valid -no errors
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
