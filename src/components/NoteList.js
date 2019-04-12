import React from "react";
import NoteContent from "./NoteContent";
import "./NoteList.css";
import NotefulContext from "../NotefulContext";

class NoteList extends React.Component {
  static contextType = NotefulContext;
  render() {
    let listNotes = this.props.notes.map(note => (
      <NoteContent
        key={note.id}
        title={note.name}
        id={note.id}
        removeNoteHandle={this.props.removeNoteHandle}
      />
    ));
    return (
      <div className="Note-list-area">
        <ul className="Note-list">
          {listNotes}
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
