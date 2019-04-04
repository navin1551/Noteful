import React from "react";
import { Link } from "react-router-dom";
import "./Note.css";

class Note extends React.Component {
  render() {
    return (
      <div className="Individual-note">
        <Link to={`/note/${this.props.id}`}>{this.props.title}</Link>
        <button
          className="Remove-button"
          onClick={() => console.log("remove button tester")}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default Note;
