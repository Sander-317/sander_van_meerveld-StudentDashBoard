import React, { Component, setState } from "react";
import { useParams } from "react-router-dom";
import App from "./App";
import data from "./assets/data";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      home: true,
      barChart: true,
      lineChart: true,
      showFun: true,
      showDifficulty: true,
      test: "state works",

      studentList: [],
      customDataNamesList: [],
      customDataList: [],
      ListAllStudentAverage: [],
    };
    this.addArrayToCustomArray = this.addArrayToCustomArray.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.reset = this.reset.bind(this);
    this.changeIsChecked = this.changeIsChecked.bind(this);
    this.getArrayOfAverage = this.getArrayOfAverage.bind(this);
  }

  toggleState = (e) => {
    switch (e) {
      case "home":
        this.setState({ home: !this.state.home });
        break;
      case "bar":
        this.setState({ barChart: !this.state.barChart });
        break;
      case "line":
        this.setState({ lineChart: !this.state.lineChart });
        break;
      case "fun":
        this.setState({ showFun: !this.state.showFun });
        break;
      case "difficulty":
        this.setState({ showDifficulty: !this.state.showDifficulty });
        break;
      default:
        console.log(e);
    }
  };

  listMaker = (property) => {
    switch (property) {
      case "name":
        const studentArray = this.state.data.map((student) => student.name);
        const studentList = [...new Set(studentArray)];
        return studentList;
        break;
      case "assignment":
        const assignmentArray = this.state.data.map(
          (student) => student.assignment
        );
        const assignmentList = [...new Set(assignmentArray)];
        return assignmentList;

        break;
      default:
        console.log(e);
    }
  };

  epicStudentListMaker() {
    const studentList = this.listMaker("name");

    const epicStudentList = studentList.map((student, index) => {
      const studentName = student;
      return {
        id: index,
        name: student,
        isChecked: false,
        assignments: this.state.data.filter(
          (student) => student.name === studentName
        ),
      };
    });

    const newState = this.state;

    newState.studentList = epicStudentList;
  }

  getArrayOfAverage(array) {
    const assignments = this.listMaker("assignment");

    if (array.length < 60) {
      const newArray = [];
      array.map((item) => {
        newArray.push({
          assignment: item.assignment,
          averageDifficulty: item.difficulty,
          averageFun: item.fun,
        });
      });
      return newArray;
    } else {
      const newArray = [];
      assignments.map((assignment) => {
        const filteredList = array.filter(
          (student) => student.assignment === assignment
        );

        const averageDifficulty =
          filteredList.reduce(
            (total, difficulty) => total + difficulty.difficulty,
            0
          ) / filteredList.length;

        const averageFun =
          filteredList.reduce((total, fun) => total + fun.fun, 0) /
          filteredList.length;

        return newArray.push({
          assignment: assignment,
          averageDifficulty: averageDifficulty,
          averageFun: averageFun,
        });
      });

      return newArray;
    }
  }

  addArrayToCustomArray = (id) => {
    const student = this.state.studentList.filter(
      (student) => String(student.id) === String(id)
    );

    const oldArray = this.state.customDataList;

    const studentArray = student[0].assignments;

    const newArray = oldArray.concat(studentArray);

    const namesList = this.state.customDataNamesList;
    namesList.push(student[0].name);

    this.setState({ customDataNamesList: namesList });
    this.setState({ customDataList: newArray });
  };
  reset() {
    this.setState({ customDataList: [] });
    this.setState({ customDataNamesList: [] });
  }

  changeIsChecked(id) {
    this.setState({
      studentList: (this.state.studentList[id].isChecked = true),
    });
  }

  render() {
    return (
      <div>
        {this.epicStudentListMaker()}

        <App
          state={this.state}
          addArrayToCustomArray={this.addArrayToCustomArray}
          toggleState={this.toggleState}
          epicStudentListMaker={this.epicStudentListMaker}
          reset={this.reset}
          changeIsChecked={this.changeIsChecked}
          getArrayOfAverage={this.getArrayOfAverage}
        />
      </div>
    );
  }
}
