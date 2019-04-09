import React from "react";
import { Link } from "react-router-dom";
import "./Note.css";

class Note extends React.Component {
  handleClick = event => {
    const id = this.props.id;
    this.props.removeNoteHandle(id);
  };

  render() {
    return (
      <div className="Individual-note">
        <Link className="link" to={`/note/${this.props.id}`}>
          {this.props.title}
        </Link>
        <button className="Remove-button" onClick={this.handleClick}>
          Remove
        </button>
        {this.props.content}
      </div>
    );
  }
}

export default Note;
