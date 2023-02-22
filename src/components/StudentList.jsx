import React from "react";

export default function StudentList({ studentList }) {
  const nameList = studentList();
  return nameList.map((student, index) => (
    <li
      className={"name-list-name"}
      key={index}
      onClick={() => console.log(student.name)}
    >
      {student.name}
    </li>
  ));
}
//   console.log(nameList);
//   {}
