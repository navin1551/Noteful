import React from "react";
import "./Note.css";
import NotefulContext from "../NotefulContext";
import NoteContent from "./NoteContent";

class Note extends React.Component {
  static contextType = NotefulContext;
  handleClick = event => {
    const id = this.props.id;
    this.props.removeNoteHandle(id);
  };

  render() {
    const note = this.context.notes.filter(
      note => note.id === this.props.match.params.noteId
    )[0];
    const { content, name, id } = note;
    return (
      <div className="Individual-note-area">
        <span>{name}</span>
        <div className="Individual-note">
          <NoteContent
            id={id}
            title={name}
            removeNoteHandle={this.props.removeNoteHandle}
          />
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default Note;
