import React from "react";
import FolderList from "./FolderList";
import NoteList from "./NoteList";

class Noteful extends React.Component {
  render() {
    return (
      <div className="Grid-container">
        <nav>
          <FolderList folders={this.props.folders} />
        </nav>
        <main>
          <NoteList
            removeNoteHandle={this.props.removeNoteHandle}
            notes={this.props.notes}
            folders={this.props.folder}
          />
        </main>
      </div>
    );
  }
}

export default Noteful;
