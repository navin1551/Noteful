import React from "react";
import Folder from "./Folder";
import { Link } from "react-router-dom";
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
            <li id={folder.id} key={folder.id} className="Folder-list-item">
              <Folder id={folder.id} title={folder.name} />
            </li>
          ))}
          <Link
            to="/add-folder"
            className="Add-folder-button"
            onClick={() => console.log("Add folder tester")}
          >
            + Folder
          </Link>
        </ul>
      </div>
    );
  }
}

export default FolderList;
