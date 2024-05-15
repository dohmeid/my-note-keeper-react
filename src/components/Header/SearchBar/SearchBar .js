import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = ({ originalNotesArray, setNewNotesArray }) => {
  //****************************STATES & HOOKS**********************************


  //****************************EVENT LISTENERS****************************

  //****************************FUNCTIONS**********************************
  //Search bar functionality: displays only events that match the search query
  const handleSearch = (e) => {
    e.preventDefault();
    let searchQuery = e.target.value.toLowerCase(); //get the search query

    if (searchQuery.length > 0) {
      console.log(originalNotesArray);
      let filteredNotesArray = originalNotesArray.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery) ||
          note.content.toLowerCase().includes(searchQuery)
      );
      setNewNotesArray(filteredNotesArray);
    }

    /*  let filteredNotesArray = notesArray.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery) ||
        note.content.toLowerCase().includes(searchQuery)
    );
    //displayTasks(filteredTasksArray);
    setNotesArray(filteredNotesArray);*/
  };

  // onKeyUp={handleSearch}
  //****************************JSX CODE**********************************
  return (
    <div className={classes.searchContainer}>
      <i className="bi bi-search" aria-hidden="true"></i>
      <input
        type="search"
        name="search"
        aria-label="search for a note"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
