import React from "react";
import Store from "../Store";
import Note from "./Note";

class NoteList extends React.Component {
  render() {
    let notes = Store.notes.map((note, id) => (
      <Note key={note.id} title={note.name} />
    ));
    return (
      <div>
        {notes}
        <button>+ Note</button>
      </div>
    );
  }
}

export default NoteList;
