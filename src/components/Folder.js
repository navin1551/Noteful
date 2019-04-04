import React from "react";
import "./Folder.css";
import { Link } from "react-router-dom";

class Folder extends React.Component {
  render() {
    return (
      <div className="individual-folder">
        <Link to={`/folder/${this.props.id}`}> {this.props.title}</Link>
      </div>
    );
  }
}

export default Folder;
