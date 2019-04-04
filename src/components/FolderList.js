import React from "react";
import Folder from "./Folder";
import "./FolderList.css";

class FolderList extends React.Component {
  render() {
    let folders = this.props.folders.map((folder, id) => (
      <Folder key={folder.id} title={folder.name} id={folder.id} />
    ));
    return (
      <div className="Folder-list-area">
        {folders}
        <button
          className="Add-folder-button"
          onClick={() => console.log("+Folder tester")}
        >
          + Folder
        </button>
      </div>
    );
  }
}

export default FolderList;
