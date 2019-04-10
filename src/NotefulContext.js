import React from "react";

const NotefulContext = React.createContext({
  deleteNote: () => {},
  folders: [],
  displayedNotes: []
});

export default NotefulContext;
