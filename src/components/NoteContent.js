import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NoteContent.css";
import NotefulContext from "../NotefulContext";

class NoteContent extends Component {
  static defaultProps = {
    onDeleteNote: () => {}
  };
  static contextType = NotefulContext;

  handleClickDelete = e => {
    e.preventDefault();
    const noteId = this.props.id;

    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.removeNote(noteId);
        this.props.onDeleteNote(noteId);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    const { title, id } = this.props;
    return (
      <li className="Note-content">
        <h2 className="Note-name">
          <Link to={`/note/${id}`} className="link">
            {title}
          </Link>
        </h2>
        <button
          className="Remove-button"
          type="button"
          onClick={this.handleClickDelete}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default NoteContent;
