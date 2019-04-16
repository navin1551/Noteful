import React from "react";
import { Route, Link } from "react-router-dom";
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
      removeNoteHandle: this.removeNoteHandle
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
