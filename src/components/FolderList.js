import React from "react";
import Store from "../Store";
import Folder from "./Folder";

class FolderList extends React.Component {
  render() {
    let folders = Store.folders.map((folder, id) => (
      <Folder key={folder.id} title={folder.name} />
    ));
    return (
      <div>
        {folders}
        <button>+ Folder</button>
      </div>
    );
  }
}

export default FolderList;
