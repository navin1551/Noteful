import React from "react";
import "./Note.css";

class Note extends React.Component {
  render() {
    return (
      <div className="Individual-note">
        <p>{this.props.title}</p>
        <button>Remove</button>
      </div>
    );
  }
}

export default Note;
