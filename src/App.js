import React from "react";
import { Route, Link } from "react-router-dom";
import FolderList from "./components/FolderList";
import NoteList from "./components/NoteList";
import Store from "./Store";
import "./App.css";

class App extends React.Component {
  state = {
    folders: Store.folders,
    notes: Store.notes
  };

  addFolderHandle = () => {
    console.log("add folder test");
  };

  addNoteHandle = () => {
    console.log("add note test");
  };

  removeNoteHandle = () => {
    "remove note test";
  };

  render() {
    return (
      <div className="App">
        <header className="Main-heading">
          <Link to={"/"}>Noteful</Link>
        </header>
        <main>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <FolderList folders={this.state.folders} />
                  <NoteList notes={this.state.notes} />
                </div>
              );
            }}
          />
          <Route
            path="/folder/:folderId"
            render={({ match }) => {
              let filterNotes = this.state.notes.filter(
                note => note.folderId === match.params.folderId
              );
              return (
                <div>
                  <FolderList folders={this.state.folders} />
                  <NoteList notes={filterNotes} />
                </div>
              );
            }}
          />
          <Route
            path="/note/:noteId"
            render={({ match }) => {
              let filterNotes = this.state.notes.filter(
                note => note.id === match.params.noteId
              );
              return (
                <div>
                  <NoteList notes={filterNotes} />
                </div>
              );
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
