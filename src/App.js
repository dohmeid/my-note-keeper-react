import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddDialog from "./components/AddDialog/AddDialog";
import Cards from "./components/Cards/Cards";
import {fetchData} from "./utils/functions";

function App() {
  //****************************STATES & HOOKS**********************************
  const [notesArray, setNotesArray] = useState([]); //this state is initialized to the original notes array from the API

  useEffect(() => {
    fetchData(setNotesArray);
  }, []);


  //****************************JSX CODE**********************************
  return (
    <div className="appContainer">
      <Header
        notesArray={notesArray}
      />

      <AddDialog
         setNotesArray={setNotesArray}
      />

      <Cards
        notesArray={notesArray}
        setNotesArray={setNotesArray}
      />

    </div>
  );
}

/*

  <Cards
        newNotesArray={newNotesArray}
        setNewNotesArray={setNewNotesArray}
        originalNotesArray={originalNotesArray}
        setOriginalNotesArray={setOriginalNotesArray}
      />

      */

export default App;
