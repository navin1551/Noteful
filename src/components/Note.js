import React from "react";
import { Link } from "react-router-dom";
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
    console.log(content);
    return (
      <div className="Individual-note">
        <NoteContent id={this.props.id} notes={this.props.notes} title={name} />
        {content}
      </div>
    );
  }
}

export default Note;
