import React from "react";
import Note from "./Note";
import "./NoteList.css";

class NoteList extends React.Component {
  render() {
    let notes = this.props.notes.map((note, id) => (
      <Note key={note.id} title={note.name} id={note.id} />
    ));
    return (
      <div className="Note-list-area">
        {notes}
        <button
          className="Add-note-button"
          onClick={() => console.log("+Note tester")}
        >
          + Note
        </button>
      </div>
    );
  }
}

export default NoteList;
