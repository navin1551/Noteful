import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NoteContent.css";
import NotefulContext from "../NotefulContext";

class NoteContent extends Component {
  static contextType = NotefulContext;
  handleClick = event => {
    const id = this.props.id;
    this.props.removeNoteHandle(id);
  };
  render() {
    const { title, id } = this.props;
    return (
      <li className="Note-content">
        <h2 className="Note-name">
          <Link to={`/note/${id}`}>{title}</Link>
        </h2>
        <button
          className="Remove-button"
          type="button"
          onClick={this.handleClick}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default NoteContent;
