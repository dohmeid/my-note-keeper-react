import React from "react";
import "./Header.module.css";
import SearchBar from "./SearchBar/SearchBar ";

const Header = ({ setSearchQuery }) => {
  return (
    <header>
      <h1>My Note Keeper</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
    </header>
  );
};

export default Header;
