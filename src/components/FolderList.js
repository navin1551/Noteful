import React from "react";
import Folder from "./Folder";
import "./FolderList.css";
import NotefulContext from "../NotefulContext";

class FolderList extends React.Component {
  static contextType = NotefulContext;
  render() {
    const { folders } = this.props;
    return (
      <div className="Folder-list-area">
        <ul className="Folder-list">
          {folders.map(folder => (
            <li key={folder.id} className="Folder-list-item">
              <Folder id={folder.id} title={folder.name} />
            </li>
          ))}
          <button
            className="Add-folder-button"
            onClick={() => console.log(this.context.folders)}
          >
            + Folder
          </button>
        </ul>
      </div>
    );
  }
}

export default FolderList;
