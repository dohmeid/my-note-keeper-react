import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = (props) => {
  const arr = props.notesArray;
  
  //rendering the notes list
  const NOTES_LIST = arr.map((note, index) => (
    <Card
      key={index}
      noteData={note}
      setNotesArray={props.setNotesArray}
    />
  ));

  return (
    <div className={classes.cardsContainer}>
      <ul>{NOTES_LIST}</ul>
    </div>
  );
};

export default Cards;
