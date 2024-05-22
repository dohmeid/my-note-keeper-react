import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = (props) => {
  let notesToDisplay = [];

  //either display the filtered notes or display all the notes (in case there is no search done)
  if (props.searchQuery !== "") {
    let filteredNotesArray = props.notesArray.filter((note) =>
      note.title.toLowerCase().includes(props.searchQuery) ||
      note.content.toLowerCase().includes(props.searchQuery)
    );
    notesToDisplay = filteredNotesArray;
  }
  else {
    notesToDisplay = props.notesArray; 
  }

  //rendering the notes list
  const NOTES_LIST = notesToDisplay.map((note, index) => (
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
