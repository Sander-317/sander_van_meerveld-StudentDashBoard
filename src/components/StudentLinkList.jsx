import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentLinkList({
  state,
  addArrayToCustomArray,
  toggleState,
}) {
  const nameList = state.studentList;
  const navigate = useNavigate();

  function onLinkPress(e) {
    e.preventDefault();
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
