import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";
import EditDialog from "./EditDialog/EditDialog";
import DeleteDialog from "./DeleteDialog/DeleteDialog";

const Card = ({noteData,setNewNotesArray,originalNotesArray,setOriginalNotesArray,}) => {
  
  //****************************STATES & HOOKS**********************************
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [noteColor, setNoteColor] = useState("");

  useEffect(() => {    
    setNoteColor(getRandomColor());
    //console.log(noteColor);
    //console.log("noteColor");
  }, []);


  //****************************EVENT LISTENERS****************************
  //this function activates when the user clicks on the Note Card -> shows edit dialog
  const handleNoteClick = (e) => {
    setShowEdit(true);
  };

  //this function activates when the user clicks on the trash icon -> shows delete dialog
  const handleTrashIconClick = (e) => {
    e.stopPropagation();
    setShowDelete(true);
  };

  //this function activates when the user clicks on Close button -> closes delete/edit dialog
  const handleCloseButtonClick = (e) => {
    console.log("close button was click");
    e.stopPropagation();
    setShowDelete(false);
    setShowEdit(false);
  };

  //this function activates when the user clicks on the delete button
  const handleDeleteButtonClick = (e) => {
    console.log("delete button was clicked");
    e.stopPropagation();

    //delete the current note from the notes list
    setOriginalNotesArray(
      originalNotesArray.filter((note) => 
        note.title !== noteData.title && note.content !== noteData.content));

    setNewNotesArray(
      originalNotesArray.filter(
        (note) => note.title !== noteData.title && note.content !== noteData.content
      )
    );

    setShowDelete(false);
  };

  //****************************FUNCTIONS**********************************
  function getRandomColor() {
    const noteColors = {
      red: "#f070708a",
      yellow: "#fee47f",
      green: "#aae793",
      blue: "#b2e2fa"
    };
  
    const colorNames = Object.keys(noteColors);
    const randomIndex = Math.floor(Math.random() * colorNames.length);
    const randomColorName = colorNames[randomIndex];
  
    return noteColors[randomColorName];
  }

  //****************************JSX CODE**********************************
  return (
    <>
      <div className={classes.card} onClick={handleNoteClick}  style={{ backgroundColor: noteColor }}>
        <h4>{noteData.title}</h4>
        <h3>{noteData.content}</h3>
        <h5 className="date">{noteData.date}</h5>
        <i className="bi bi-trash" onClick={handleTrashIconClick}></i>
      </div>

      {showEdit && (
        <EditDialog
          noteData={noteData}
          setShowEdit={setShowEdit}
          handleCloseButtonClick={handleCloseButtonClick}
          setNewNotesArray={setNewNotesArray}
          originalNotesArray={originalNotesArray}
          setOriginalNotesArray={setOriginalNotesArray}
        />
      )}

      {showDelete && (
        <DeleteDialog
          handleCloseButtonClick={handleCloseButtonClick}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      )}
    </>
  );
};

export default Card;
