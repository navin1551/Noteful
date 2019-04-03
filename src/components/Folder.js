import React from "react";
import "./Folder.css";

class Folder extends React.Component {
  render() {
    return (
      <div className="individual-folder">
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Folder;
