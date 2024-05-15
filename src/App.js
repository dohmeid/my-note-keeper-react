import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddNote from "./components/AddNote/AddNote";
import Cards from "./components/Cards/Cards";
import { NOTES } from "./data/notes";

function App() {
  //STATES & HOOKS-------------------------------------------------------------------
  const [notesArray, setNotesArray] = useState(NOTES); //this state is initialized to the original notes array from the API

  //JSX CODE---------------------------------------------------------------
  return (
    <div className="appContainer">
      <Header />
      <AddNote notesArray={notesArray} setNotesArray={setNotesArray} />
      <Cards notesArray={notesArray} setNotesArray={setNotesArray} />
    </div>
  );
}

export default App;
