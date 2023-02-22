import React, { Component } from "react";
import App from "./App";
import { testData } from "./assets/testdata";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      test: "state works",
      testData: testData,
    };
  }

  render() {
    return <App state={this.state} />;
  }
}
