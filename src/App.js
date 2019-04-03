import React from "react";
import FolderList from "./components/FolderList";
import NoteList from "./components/NoteList";
import Store from "./Store";
import "./App.css";

class App extends React.Component {
  state = {
    store: Store,
    folders: [],
    notes: []
  };

  render() {
    return (
      <div className="App">
        <header className="Main-heading">
          <h1>Noteful</h1>
        </header>
        <main>
          <FolderList />
          <NoteList />
        </main>
      </div>
    );
  }
}

export default App;
