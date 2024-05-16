import React from "react";
import "./Header.module.css";
import SearchBar from "./SearchBar/SearchBar ";

const Header = ({ notesArray }) => {
  return (
    <header>
      <h1>My Note Keeper</h1>
      <SearchBar
        notesArray={notesArray}
      />
    </header>
  );
};

export default Header;
