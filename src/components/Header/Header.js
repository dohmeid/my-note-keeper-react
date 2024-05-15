import React from "react";
import "./Header.module.css";
import SearchBar from "./SearchBar/SearchBar ";

const Header = ({ originalNotesArray, newNotesArray, setNewNotesArray }) => {
  //****************************JSX CODE**********************************
  return (
    <header>
      <h1>My Note Keeper</h1>
      <SearchBar
        originalNotesArray={originalNotesArray}
        newNotesArray={newNotesArray}
        setNewNotesArray={setNewNotesArray}
      />
    </header>
  );
};

export default Header;
