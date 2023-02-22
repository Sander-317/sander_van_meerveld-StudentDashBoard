import React, { Component } from "react";
import App from "./App";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      test: "state works",
    };
  }

  render() {
    return <App state={this.state} />;
  }
}
