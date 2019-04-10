import React from "react";
import Note from "./Note";
import "./NoteList.css";
import NotefulContext from "../NotefulContext";

class NoteList extends React.Component {
  static contextType = NotefulContext;
  render() {
    let notes = this.props.notes.map(note => (
      <Note
        key={note.id}
        title={note.name}
        id={note.id}
        removeNoteHandle={this.props.removeNoteHandle}
      />
    ));
    return (
      <div className="Note-list-area">
        <ul className="Note-list">
          {notes}
          <button
            className="Add-note-button"
            onClick={() => console.log(this.context.notes)}
          >
            + Note
          </button>
        </ul>
      </div>
    );
  }
}

export default NoteList;
