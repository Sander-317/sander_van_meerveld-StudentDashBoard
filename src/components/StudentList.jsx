import React from "react";

export default function StudentList({
  state,
  addArrayToCustomArray,
  changeIsChecked,
}) {
  const nameList = state.studentList;
  const displayedNames = state.customDataNamesList;
  console.log("displayed names", state.customDataNamesList);

  const handleChange = (id) => {
    addArrayToCustomArray(id);
  };

  const displayNameList = () => {
    const newArray = nameList.map((student, index) => {
      console.log(displayedNames.includes(student.name));
      const test = false;
      if (displayedNames.includes(student.name))
        return (
          <li className={"name-list-name"} key={index}>
            <input type="checkbox" checked={true}></input>
            {student.name}
          </li>
        );
      else {
        return (
          <li className={"name-list-name"} key={index}>
            <input
              type="checkbox"
              onChange={() => handleChange(student.id)}
            ></input>
            {student.name}
          </li>
        );
      }
    });
    return newArray;
  };

  return displayNameList().map((item) => item);
}
