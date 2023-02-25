import React from "react";

export default function StudentList({ state, addArrayToCustomArray }) {
  const nameList = state.studentList;
  const displayedNames = state.customDataNamesList;

  const displayNameList = () => {
    const newArray = nameList.map((student, index) => {
      const test = false;
      if (displayedNames.includes(student.name))
        return (
          <li className={"name-list-name"} key={index}>
            <input
              type="checkbox"
              checked={true}
              onChange={() => console.log("use reset")}
            ></input>
            {student.name}
          </li>
        );
      else {
        return (
          <li className={"name-list-name"} key={index}>
            <input
              type="checkbox"
              onChange={() => addArrayToCustomArray(student.id)}
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
