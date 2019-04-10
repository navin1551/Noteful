import React, { Component } from "react";
import "./NoteContent.css";
import NotefulContext from "../NotefulContext";

class NoteContent extends Component {
  static contextType = NotefulContext;
  handleClick = event => {
    console.log("tester");
    const { id } = this.props.filteredNote[0];
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
          <button onClick={() => console.log("test")}>Remove</button>
        </div>
      </div>
    );
  }
}

export default NoteContent;
