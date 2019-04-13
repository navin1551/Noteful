import React from "react";
import { Route, Link } from "react-router-dom";
import FolderList from "./components/FolderList";
import NoteList from "./components/NoteList";
import Note from "./components/Note";
import Noteful from "./components/Noteful";
import NotefulContext from "./NotefulContext";
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

  removeNoteHandle = id => {
    let updatedNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: updatedNotes
    });
  };

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.removeNoteHandle
    };
    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <header>
            <h2>
              {" "}
              <Link to={"/"}>Noteful</Link>
            </h2>
          </header>
          <Route
            exact
            path="/"
            render={() => (
              <Noteful
                notes={this.state.notes}
                folders={this.state.folders}
                removeNoteHandle={this.removeNoteHandle}
              />
            )}
          />
          <Route
            path="/folder/:folderId"
            render={({ match }) => (
              <Noteful
                notes={this.state.notes.filter(
                  note => note.folderId === match.params.folderId
                )}
                folders={this.state.folders}
                removeNoteHandle={this.removeNoteHandle}
              />
            )}
          />
          <Route
            path="/note/:noteId"
            render={({ match }) => (
              <Note
                note={
                  this.state.notes.filter(
                    note => note.id === match.params.noteId
                  )[0]
                }
                removeNoteHandle={this.removeNoteHandle}
                folder={this.state.folders}
              />
            )}
          />
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
