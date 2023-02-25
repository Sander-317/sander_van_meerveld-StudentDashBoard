import React from "react";

export default function StudentList({
  state,
  addArrayToCustomArray,
  changeIsChecked,
}) {
  const nameList = state.studentList;

  const handleChange = (id) => {
    changeIsChecked(id);
    addArrayToCustomArray(id);
  };

  return nameList.map((student, index) => (
    <li className={"name-list-name"} key={index}>
      <input
        type="checkbox"
        // checked={state.studentList[student.id].isChecked}
        onChange={() => handleChange(student.id)}
        // onChange={() => addArrayToCustomArray(student.id)}
      ></input>
      {student.name}
    </li>
  ));
}
