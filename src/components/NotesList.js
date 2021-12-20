import Form from "./Form";
import React, { useState } from "react";
import Note from "./Note";
import Modal from "react-modal";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);
  const [activeNote, setActiveNote] = useState({
    title: "",
    text: "",
    date: "",
    id: "",
  });
  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const addNote = (note) => {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
  };

  const removeNote = (id) => {
    const removeArray = [...notes].filter((note) => note.id !== id);
    setNotes(removeArray);
  };

  function setNoteAndShow(note) {
    setActiveNote(note);
    toggleShow();
  }

  function toggleShow() {
    setShow(!show);
  }

  const handleChangeModalTitle = (event) => {
    setModalTitle(event.target.value);
  };

  const handleChangeModalText = (event) => {
    setModalText(event.target.value);
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    setActiveNote({
      title: modalTitle,
      text: modalText,
      date: Date(),
    });
    setModalTitle("");
    setModalText("");
    setNotes([activeNote]);
  };
  return (
    <div className="notes-list">
      <Form onSubmit={addNote} />
      <Note
        callback={setNoteAndShow}
        activeNote={activeNote}
        notes={notes}
        removeNote={removeNote}
      />

      <Modal
        className="modal-container"
        isOpen={show}
        onRequestClose={toggleShow}
      >
        <div>
          <form className="modal-form" onSubmit={handleModalSubmit}>
            <input
              type="text"
              value={modalTitle}
              onChange={handleChangeModalTitle}
              placeholder={activeNote.title}
              className="modal-title-input"
            />
            <input
              type="text"
              value={modalText}
              onChange={handleChangeModalText}
              placeholder={activeNote.text}
              className="modal-text-input"
            />
            <div className="date-container">
              <p>{activeNote.date}</p>
              <button type="submit" className="modal-button">
                Update
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default NotesList;
