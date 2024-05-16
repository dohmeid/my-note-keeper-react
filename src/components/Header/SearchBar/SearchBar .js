import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = ({ notesArray }) => {

  //this handler activates when the user enters an input to the search bar
  const handleSearchQuery = (e) => {
    let searchQuery = e.target.value.toLowerCase();

    let filteredNotesArray = notesArray.filter((note) =>
      note.title.toLowerCase().includes(searchQuery) || 
      note.content.toLowerCase().includes(searchQuery)
    );

   // setNewNotesArray(filteredNotesArray); //to re-render the new filtered notes list
  };

  return (
    <div className={classes.searchContainer}>
      <i className="bi bi-search" aria-hidden="true"></i>
      <input
        type="search"
        name="search"
        aria-label="search for a note"
        placeholder="Search..."
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default SearchBar;
