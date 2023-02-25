import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentLinkList({
  state,
  addArrayToCustomArray,
  toggleState,
  changeIsChecked,
}) {
  const nameList = state.studentList;
  const navigate = useNavigate();

  function onLinkPress(e) {
    e.preventDefault();

    changeIsChecked(e.target.value);
    addArrayToCustomArray(e.target.value);
    toggleState("home");

    navigate("./" + e.target.value);
  }

  return nameList.map((student, index) => (
    <li
      className={"name-list-name"}
      key={index}
      value={student.id}
      onClick={onLinkPress}
    >
      {student.name}
    </li>
  ));
}
