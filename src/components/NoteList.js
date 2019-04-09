import React from "react";
import Note from "./Note";
import "./NoteList.css";

class NoteList extends React.Component {
  render() {
    let notes = this.props.notes.map((note, id) => (
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
        <button className="Add-note-button">+ Note</button>
      </div>
    );
  }
}

export default NoteList;
