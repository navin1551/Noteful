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
    const { content, name } = this.props.filteredNote[0];
    return (
      <div className="Individual-note-area">
        <span>IMPORTANT</span>
        <div className="Individual-note">
          <NoteContent
            id={this.props.id}
            notes={this.props.notes}
            title={name}
          />
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default Note;
