import React from "react";

export default function StudentList({ state }) {
  const nameList = state.studentList;
  return nameList.map((student, index) => (
    <li
      className={"name-list-name"}
      key={index}
      onClick={() => console.log(student.name)}
    >
      <input type="checkbox"></input>
      {student.name}
    </li>
  ));
}
