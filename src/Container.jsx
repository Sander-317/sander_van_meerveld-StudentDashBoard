import React, { Component } from "react";
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
    };
    this.makeListOfAverage = this.makeListOfAverage.bind(this);
    this.epicStudentListMaker = this.epicStudentListMaker.bind(this);
    // this.makeListAssignments = this.makeListAssignments.bind(this);
    // this.studentListMaker = this.studentListMaker.bind(this);
  }

  studentListMaker() {
    const studentArray = data.map((student) => student.name);
    const studentList = [...new Set(studentArray)];
    // console.log(studentList);
    return studentList;
  }

  makeListAssignments() {
    const firstStudentName = this.state.data[0].name;
    // console.log(firstStudentName);
    const oneStudent = this.state.data.filter(
      (student) => student.name === firstStudentName
    );
    const assignmentList = oneStudent.map((student) => student.assignment);
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
    return epicStudentList;
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
    // console.log(newArray);
    return newArray;
  }

  render() {
    return (
      <div>
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
