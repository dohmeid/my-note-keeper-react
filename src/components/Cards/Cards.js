import React, { useEffect, useState } from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = (props) => {
  //the props that we get form the parent are -> props.notesArray , props.setNotesArray

  const arr = props.notesArray;
  //rendering the notes list
  const NOTES_LIST = arr.map((note, index) => (
    <Card key={index} noteData={note} />
  ));

  return (
    <div className={classes.cardsContainer}>
      <ul>{NOTES_LIST}</ul>
    </div>
  );
};

export default Cards;
