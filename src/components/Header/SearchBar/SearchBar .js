import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.searchContainer}>
      <i className="bi bi-search" aria-hidden="true"></i>
      <input
        type="search"
        name="search"
        aria-label="search for a note"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;