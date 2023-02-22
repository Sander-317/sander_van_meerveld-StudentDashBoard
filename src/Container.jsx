import React, { Component, setState } from "react";
import App from "./App";
import { testData } from "./assets/testdata";
import data from "./assets/data";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      test: "state works",

      studentList: [],
      ListAllStudentAverage: [],
    };
    this.makeListOfAverage = this.makeListOfAverage.bind(this);
    this.epicStudentListMaker = this.epicStudentListMaker.bind(this);
    // this.makeListAssignments = this.makeListAssignments.bind(this);
    // this.studentListMaker = this.studentListMaker.bind(this);
  }

  studentListMaker() {
    const studentArray = this.state.data.map((student) => student.name);
    const studentList = [...new Set(studentArray)];
    return studentList;
  }

  makeListAssignments() {
    const assignmentArray = this.state.data.map(
      (assignment) => assignment.assignment
    );
    const assignmentList = [...new Set(assignmentArray)];
    return assignmentList;
  }
  epicStudentListMaker() {
    const studentList = this.studentListMaker();
    const epicStudentList = studentList.map((student, index) => {
      const studentName = student;
      return {
        id: index,
        name: student,
        assignments: this.state.data.filter(
          (student) => student.name === studentName
        ),
      };
    });
    // console.log(epicStudentList);
    const newState = this.state;
    // console.log(newState);
    newState.studentList = epicStudentList;
    // return epicStudentList;
  }

  makeListOfAverage() {
    const assignments = this.makeListAssignments();
    // console.log(assignments);
    const newArray = [];
    assignments.map((assignment) => {
      const filteredList = this.state.data.filter(
        (student) => student.assignment === assignment
      );
      // console.log(filteredList);
      const averageDifficulty =
        filteredList.reduce(
          (total, difficulty) => total + difficulty.difficulty,
          0
        ) / filteredList.length;

      const averageFun =
        filteredList.reduce((total, difficulty) => total + difficulty.fun, 0) /
        filteredList.length;
      // console.log(average);
      return newArray.push({
        assignment: assignment,
        averageDifficulty: averageDifficulty,
        averageFun: averageFun,
      });
    });
    const newState = this.state;
    newState.ListAllStudentAverage = newArray;
    // return newArray;
  }

  render() {
    return (
      <div>
        {this.epicStudentListMaker()}
        {this.makeListOfAverage()}
        {/* {console.log(this.studentListMaker())} */}
        {/* {console.log(this.epicStudentListMaker())} */}
        <App
          state={this.state}
          makeListOfAverage={this.makeListOfAverage}
          studentList={this.epicStudentListMaker}
        />
      </div>
    );
  }
}
