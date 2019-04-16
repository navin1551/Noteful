import React from "react";
import { Route, Link } from "react-router-dom";
import Note from "./components/Note";
import Noteful from "./components/Noteful";
import NotefulContext from "./NotefulContext";
import "./App.css";

class App extends React.Component {
  state = {
    folders: [],
    notes: []
  };

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:9090/folders"),
      fetch("http://localhost:9090/notes")
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
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      removeNote: this.removeNoteHandle
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
          <main>
            <Route exact path="/" component={Noteful} />
            <Route path="/folder/:folderId" component={Noteful} />
            <Route path="/note/:noteId" component={Note} />
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
