import React from "react";
import Folder from "./Folder";
import "./FolderList.css";
import NotefulContext from "../NotefulContext";

class FolderList extends React.Component {
  static contextType = NotefulContext;
  render() {
    let folders = this.context.folders.map((folder, id) => (
      <Folder key={folder.id} title={folder.name} id={folder.id} />
    ));
    return (
      <div className="Folder-list-area">
        <h3>{folders}</h3>
        <button
          className="Add-folder-button"
          onClick={() => console.log("tester")}
        >
          + Folder
        </button>
      </div>
    );
  }
}

export default FolderList;
