import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="buttons-container">
        <button className="buttons" type="submit">
          Edit
        </button>
        <button id="deleteBtn" className="buttons" type="submit">
          Delete
        </button>
        <button className="buttons" type="submit">
          New
        </button>
      </div>
    );
  }
}
