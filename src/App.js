import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddDialog from "./components/AddDialog/AddDialog";
import Cards from "./components/Cards/Cards";
import { fetchData } from "./services/Utility/Utils";

function App() {
  //****************************STATES & HOOKS**********************************
  const [notesArray, setNotesArray] = useState([]);   //this state is initialized to the original notes array from the API
  const [searchQuery, setSearchQuery] = useState(""); //this state holds the search input

  //to initially display the note cards
  useEffect(() => {
    fetchData(setNotesArray);
  }, []);

  //****************************JSX CODE**********************************
  return (
    <div className="appContainer">
      <Header setSearchQuery={setSearchQuery} />

      <AddDialog setNotesArray={setNotesArray} />

      <Cards
        searchQuery={searchQuery}
        notesArray={notesArray}
        setNotesArray={setNotesArray}
      />
    </div>
  );
}

export default App;