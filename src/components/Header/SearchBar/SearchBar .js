import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = ({ setSearchQuery }) => {

  //this handler activates when the user enters an input to the search bar
  const handleSearchQuery = (e) => {
    let query = e.target.value.toLowerCase();
    setSearchQuery(query);
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
