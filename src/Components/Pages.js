import React, { Component } from "react";
import data from "../data";
import Buttons from "./Buttons";

export default class Pages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.pageUp = this.pageUp.bind(this);
    this.pageDown = this.pageDown.bind(this);
  }

  pageUp() {
    let newIndex = this.state.index;
    if (newIndex === data.length - 1) {
      newIndex = 0;
    } else {
      console.log({ newIndex });
      newIndex++;
    }
    this.setState({ index: newIndex });
  }

  pageDown() {
    let newIndex = this.state.index;
    if (newIndex === 0) {
      newIndex = data.length - 1;
    } else {
      console.log({ newIndex });
      newIndex--;
    }
    this.setState({ index: newIndex });
  }

  render() {
    let larrow = "\u003C";
    let rarrown = "\u003E";
    return (
      <div className="main-nav-container">
        <div className="page-layout">
          <button className="page" onClick={this.pageDown}>
            {larrow} Previous
          </button>
          <div className="button-layout">
            <Buttons />
          </div>
          <button className="page" onClick={this.pageUp}>
            Next {rarrown}
          </button>
        </div>
      </div>
    );
  }
}
