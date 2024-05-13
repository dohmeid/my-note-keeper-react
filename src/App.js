import "./App.css";
import Header from "./components/Header/Header";
import AddNote from "./components/AddNote/AddNote";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <AddNote />
      <Cards />
    </div>
  );
}

export default App;
