import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentLinkList({
  state,
  addArrayToCustomArray,
  toggleState,
}) {
  const nameList = state.studentList;
  const navigate = useNavigate();
  //   console.log("togglestate", toggleState);
  //   console.log(nameList);
  function onLinkPress(e) {
    e.preventDefault();
    // console.log(e.target.value);
    // const newArray = state.studentList.filter(
    //   (student) => String(student.id) === String(e.target.value)
    // );
    addArrayToCustomArray(e.target.value);
    toggleState("home");
    // addArrayToCustomArray(newArray[0].assignments);
    // console.log(newArray[0].assignments);
    navigate("./" + e.target.value);
  }

  return nameList.map((student, index) => (
    <li
      className={"name-list-name"}
      key={index}
      value={student.id}
      onClick={onLinkPress}
      //   onClick={() => navigate("./" + student.id)}
    >
      {student.name}
    </li>
  ));
}
