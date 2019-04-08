import React, { Component } from "react";

class NoteContent extends Component {
  render() {
    const { name, content } = this.props.filteredNote[0];
    return (
      <div>
        <h2>{name}</h2>
        <p>{content}</p>
        <button>Back</button>
      </div>
    );
  }
}

export default NoteContent;
