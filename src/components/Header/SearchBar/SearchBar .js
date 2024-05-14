import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {


    //FUNCTIONS----------------------------------------------------------------
    //Search bar functionality: displays only events that match the search query
    const searchNameChangeHandler = (e) => {
    /*  let searchName = e.target.value;

      //iterate through all cards and add only cards that match the search query to the searchResultCards array
      let searchResultCards = [];
      for (let cardData of props.originalDataArray) {
          let name = cardData.name;
          if (name.indexOf(searchName) > -1) { //check if searchName is a substring of card name
              searchResultCards.push(cardData); //add to filteredArray
          }
      }
      props.setFilteredDataArray(searchResultCards);
      setIsChanged(true);*/
  }


  return (
    <div className={classes.searchContainer}>
      <i className="bi bi-search" aria-hidden="true"></i>
      <input
        type="search"
        name="search"
        aria-label="search for a note"
        placeholder="Search..."
        onChange={searchNameChangeHandler}
      />
    </div>
  );
};

export default SearchBar;