import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddNote from "./components/AddNote/AddNote";
import Cards from "./components/Cards/Cards";
import { NOTES } from "./data/notes";

function App() {
  //****************************STATES & HOOKS**********************************
  const [originalNotesArray, setOriginalNotesArray] = useState(NOTES); //this state is initialized to the original notes array from the API
  const [newNotesArray, setNewNotesArray] = useState(NOTES); //this array contains filtered group of data from the originalArray

  //****************************JSX CODE**********************************
  return (
    <div className="appContainer">
      <Header
        originalNotesArray={originalNotesArray}
        newNotesArray={newNotesArray}
        setNewNotesArray={setNewNotesArray}
      />
      <AddNote
        setNewNotesArray={setNewNotesArray}
        originalNotesArray={originalNotesArray}
        setOriginalNotesArray={setOriginalNotesArray}
      />
      <Cards newNotesArray={newNotesArray} 
       setNewNotesArray={setNewNotesArray}
       originalNotesArray={originalNotesArray}
       setOriginalNotesArray={setOriginalNotesArray}/>
    </div>
  );
}

export default App;
