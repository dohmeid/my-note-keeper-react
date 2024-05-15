import React from "react";
import "./Header.module.css";
import SearchBar from "./SearchBar/SearchBar ";

const Header = () => {
  //JSX CODE---------------------------------------------------------------
  return (
    <header>
      <h1>My Note Keeper</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
