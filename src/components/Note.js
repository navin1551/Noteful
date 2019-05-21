import React from "react";
import "./Note.css";
import NotefulContext from "../NotefulContext";
import NoteContent from "./NoteContent";
import { Link, Redirect } from "react-router-dom";

class Note extends React.Component {
  static contextType = NotefulContext;

  render() {
    const noteId = parseInt(this.props.match.params.noteId);
    const note = this.context.notes.filter(note => note.id === noteId)[0];

    if (note) {
      const { content, name, id, folderId } = note;
      const folder = this.context.folders.filter(
        folder => folder.id === folderId
      )[0];
      return (
        <div className="Individual-note-area">
          <Link to="/" className="Back-button">
            Back
          </Link>
          <span className="Note-folder-name">{name}</span>
          <div className="Individual-note">
            <NoteContent id={id} title={name} />
            <p>{content}</p>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Note;
