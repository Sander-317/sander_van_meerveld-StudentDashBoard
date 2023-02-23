import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentLinkList({ state }) {
  const nameList = state.studentList;
  const navigate = useNavigate();

  //   console.log(nameList);
  return nameList.map((student, index) => (
    <li
      className={"name-list-name"}
      key={index}
      onClick={() => navigate("./" + student.id)}
    >
      {student.name}
    </li>
  ));
}
