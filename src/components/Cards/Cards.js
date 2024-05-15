import React, { useEffect, useState } from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = (props) => {
  const arr = props.newNotesArray;
  //rendering the notes list
  const NOTES_LIST = arr.map((note, index) => (
    <Card
      key={index}
      noteData={note}
      setNewNotesArray={props.setNewNotesArray}
      originalNotesArray={props.originalNotesArray}
      setOriginalNotesArray={props.setOriginalNotesArray}
    />
  ));

  return (
    <div className={classes.cardsContainer}>
      <ul>{NOTES_LIST}</ul>
    </div>
  );
};

export default Cards;
