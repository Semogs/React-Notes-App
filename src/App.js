import "./App.css";
import NotesList from "./components/NotesList";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <NotesList />
    </div>
  );
}

export default App;
