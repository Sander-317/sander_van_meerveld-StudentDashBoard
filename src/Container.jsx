import React, { Component } from "react";
import App from "./App";
import { testData } from "./assets/testdata";
import data from "./assets/data";

function studentListMaker() {
  const studentArray = data.map((student) => student.name);
  const studentlist = [...new Set(studentArray)];
  // const epicStudentList = studentlist.map((student) => {
  //   name: student,
  //     assignments: data.filter((student) => student.name === student);
  // });
  // console.log(epicStudentList);
  return studentlist;
}

function makeListAssignments() {
  const oneStudent = data.filter((student) => student.name === "Sandra");
  const assignmentList = oneStudent.map((student) => student.assignment);
  return assignmentList;
}

// function makeListOfAverage() {
//   const assignments = makeListAssignments();
//   const newArray = [];
//   const test = assignments.map((assignment) => {
//     let tester = assignment;
//     let filteredList = data.filter((student) => student.assignment === tester);
//     // console.log(filteredList);
//     let average =
//       filteredList.reduce(
//         (total, difficulty) => total + difficulty.difficulty,
//         0
//       ) / filteredList.length;
//     // console.log(average);
//     return newArray.push({ assignment: assignment, average: average });
//   });
//   console.log(newArray);
//   return newArray;
//   //   const average = array => array.reduce((a, b) => a + b) / array.length;
//   // console.log(average([1,2,3,4,5]));
// }
// const listOfAverages = makeListOfAverage();

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      test: "state works",
      testData: testData,
      singleStudentData: data.filter((student) => student.name === "Sandra"),
      studentList: studentListMaker(),
      assignmentList: makeListAssignments(),
      // listOfAverages: listOfAverages,
      // [...new Set(data.map((student) => student.name))],
    };
    this.makeListOfAverage = this.makeListOfAverage.bind(this);
  }
  makeListOfAverage() {
    console.log("het werkt");
    const assignments = makeListAssignments();
    const newArray = [];
    const test = assignments.map((assignment) => {
      let filteredList = data.filter(
        (student) => student.assignment === assignment
      );
      // console.log(filteredList);
      let averageDifficulty =
        filteredList.reduce(
          (total, difficulty) => total + difficulty.difficulty,
          0
        ) / filteredList.length;

      let averageFun =
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
    //   const average = array => array.reduce((a, b) => a + b) / array.length;
    // console.log(average([1,2,3,4,5]));
  }

  render() {
    return (
      <div>
        {/* {console.log(`student list = ${this.state.studentList}`)} */}
        {console.table(`${this.state.listOfAverages}`)}
        <App state={this.state} makeListOfAverage={this.makeListOfAverage} />
      </div>
    );
  }
}
