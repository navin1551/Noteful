import React, { Component } from "react";
import "./NoteContent.css";

class NoteContent extends Component {
  handleClick = event => {
    const id = this.props.id;
    this.props.removeNoteHandle(id);
  };

  render() {
    const { name, content } = this.props.filteredNote[0];
    return (
      <div className="Note-content-area">
        <div className="Important-container">
          <span>IMPORTANT</span>
        </div>
        <div className="Note-info-area">
          <h2>{name}</h2>
          <p>{content}</p>
          <button>Back</button>
          <button onClick={() => console.log("remove button tester")}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default NoteContent;
