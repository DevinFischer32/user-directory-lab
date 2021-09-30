import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <button type="submit">Edit</button>
        <button type="submit">Delete</button>
        <button type="submit">New</button>
      </div>
    );
  }
}
