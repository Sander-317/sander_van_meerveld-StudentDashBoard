import React from "react";
import { useParams } from "react-router-dom";
import BarChart from "../BarChart";

export default function Student({ state }) {
  const student = useParams();
  console.log("student params", student.student);

  return (
    <div>
      {" "}
      <h2>Student = {student.student}</h2>
      <BarChart state={state}></BarChart>
    </div>
  );
}
