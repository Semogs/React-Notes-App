import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note({ notes, removeNote, callback }) {
  return notes.map((note) => (
    <div
      onClick={() => {
        callback(note);
      }}
      className="note-container"
      key={note.id}
    >
      <div className="note-box">
        <div className="note-title">{note.title}</div>
        <div className="content-container">
          <span className="note-text">{note.text}</span>
        </div>
      </div>
      <span className="date-info">{note.date}</span>
      <button
        className="delete-button"
        onClick={(event) => {
          event.stopPropagation();
          if (window.confirm("Are you sure?")) return removeNote(note.id);
        }}
      >
        <MdDeleteForever className="delete-icon" />
      </button>
    </div>
  ));
}

export default Note;
