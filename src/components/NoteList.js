import React from "react";
import Note from "./Note";
import "./NoteList.css";
import NotefulContext from "../NotefulContext";

class NoteList extends React.Component {
  static contextType = NotefulContext;
  render() {
    let notes = this.context.notes.map((note, id) => (
      <Note
        key={note.id}
        title={note.name}
        id={note.id}
        removeNoteHandle={this.props.removeNoteHandle}
      />
    ));
    return (
      <div className="Note-list-area">
        <h3>{notes}</h3>
        <button
          className="Add-note-button"
          onClick={() => console.log("add note tester")}
        >
          + Note
        </button>
      </div>
    );
  }
}

export default NoteList;
