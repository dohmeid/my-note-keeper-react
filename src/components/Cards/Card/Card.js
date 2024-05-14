import React from "react";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.card}>
        <h4>Notes Keeper</h4>
        <h3>React Task</h3>
        <h5>date here</h5>
        <i class="bi bi-trash"></i>
    </div>
  );
};

export default Card;
