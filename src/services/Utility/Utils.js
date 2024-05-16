//note: this file contains all the functions that are utilized/common between the different components
import { fetchNotes } from "../API/NotesApi";

//this function fetchs the data from the api and updates the screen using the setState
export const fetchData = async (setStateFunction) => {
  try {
    const data = await fetchNotes();
    setStateFunction(data.response);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

//this function validates form input fields
export const isFormValid = (formData, setFormData, isEditForm) => {
  let errors = false;

  // Check if inputs are empty or spaces
  if (formData.title.trim().length === 0 || formData.content.trim().length === 0) {
    errors = true;
  }

  //if the form is an edit note form - make an extra validation for the date input feild
  if (isEditForm) {
    if (formData.newDate === null || formData.newDate === "") {
      errors = true;
    }
  }

  setFormData((prevState) => ({ ...prevState, errors })); //update the state
  return errors === false; //reture true if the form is valid -no errors
};