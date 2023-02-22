import React, { Component } from "react";
import App from "./App";
import { testData } from "./assets/testdata";
import data from "./assets/data";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      test: "state works",
      testData: testData,
      singleStudentData: data.filter((student) => student.name === "Sandra"),
    };
  }

  render() {
    return <App state={this.state} />;
  }
}
