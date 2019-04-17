import React from "react";
import Folder from "./Folder";
import "./FolderList.css";
import NotefulContext from "../NotefulContext";

class FolderList extends React.Component {
  static contextType = NotefulContext;
  render() {
    const { folders } = this.context;
    return (
      <div className="Folder-list-area">
        <ul className="Folder-list">
          {folders.map(folder => (
            <li
              id={folder.id}
              key={folder.id}
              className="Folder-list-item"
              onClick={() => console.log("test")}
            >
              <Folder id={folder.id} title={folder.name} />
            </li>
          ))}
          <button
            className="Add-folder-button"
            onClick={() => console.log("Add folder tester")}
          >
            + Folder
          </button>
        </ul>
      </div>
    );
  }
}

export default FolderList;
