import React from "react";

export default function StudentList({ state, addArrayToCustomArray }) {
  const nameList = state.studentList;
  return nameList.map((student, index) => (
    <li
      className={"name-list-name"}
      key={index}
      onClick={() => console.log(student.name)}
    >
      <input
        type="checkbox"
        onChange={() => addArrayToCustomArray(student.id)}
      ></input>
      {student.name}
    </li>
  ));
}
