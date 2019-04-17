import React from "react";
import "./Folder.css";
import { NavLink } from "react-router-dom";

class Folder extends React.Component {
  render() {
    return (
      <div className="Individual-folder">
        <NavLink className="link" to={`/folder/${this.props.id}`}>
          {this.props.title}
        </NavLink>
      </div>
    );
  }
}

export default Folder;
