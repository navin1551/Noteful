import React from "react";
import NoteContent from "./NoteContent";
import "./NoteList.css";
import NotefulContext from "../NotefulContext";

class NoteList extends React.Component {
  static contextType = NotefulContext;
  render() {
    let listNotes = this.props.match.params.hasOwnProperty("folderId")
      ? this.context.notes.map(note => {
          if (note.folderId === this.props.match.params.folderId) {
            return <NoteContent key={note.id} title={note.name} id={note.id} />;
          }
        })
      : this.context.notes.map(note => (
          <NoteContent key={note.id} title={note.name} id={note.id} />
        ));
    return (
      <div className="Note-list-area">
        <ul className="Note-list">
          {listNotes}
          <button
            className="Add-note-button"
            onClick={() => console.log("Add note tester")}
          >
            + Note
          </button>
        </ul>
      </div>
    );
  }
}

export default NoteList;
