import React from "react";
import { Route, Link } from "react-router-dom";
import FolderList from "./components/FolderList";
import NoteList from "./components/NoteList";
import NoteContent from "./components/NoteContent";
import Store from "./Store";
import "./App.css";

class App extends React.Component {
  state = {
    folders: Store.folders,
    notes: Store.notes
  };

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:9090/folders"),
      fetch("http://localhost/9090/notes")
    ])

      .then(([folderRes, noteRes]) => {
        if (!folderRes.ok) return folderRes.json().then(e => Promise.reject(e));
        if (!noteRes.ok) return noteRes.json().then(e => Promise.reject(e));

        return Promise.all([folderRes.json(), noteRes.json()]);
      })
      .then(([folders, notes]) => {
        this.setState({
          folders
        });
        this.setState({
          notes
        });
      })

      .catch(error => {
        console.error({ error });
      });
  }

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
    return (
      <div className="App">
        <header>
          <Link to={"/"}>Noteful</Link>
        </header>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="Grid-container">
                <nav>
                  <FolderList folders={this.state.folders} />
                </nav>
                <main>
                  <NoteList
                    removeNoteHandle={this.removeNoteHandle}
                    notes={this.state.notes}
                  />
                </main>
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
              <div className="Grid-container">
                <nav>
                  <FolderList folders={this.state.folders} />
                </nav>
                <main>
                  <NoteList
                    notes={filterNotes}
                    removeNoteHandle={this.removeNoteHandle}
                  />
                </main>
              </div>
            );
          }}
        />
        <Route
          path="/note/:noteId"
          render={({ match }) => {
            let filteredNote = this.state.notes.filter(
              note => note.id === match.params.noteId
            );
            return (
              <NoteContent
                filteredNote={filteredNote}
                notes={this.state.notes}
                removeNoteHandle={this.removeNoteHandle}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
