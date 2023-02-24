import React from "react";
import { useParams } from "react-router-dom";
import BarChart from "../BarChart";
import StudentList from "../StudentList";

export default function Student({ state, addArrayToCustomArray }) {
  const student = useParams();
  console.log("student params", student.student);

  return (
    <div>
      {" "}
      <BarChart state={state}></BarChart>
      <ul className="name-list">
        <h2>student list:</h2>

        <StudentList
          state={state}
          addArrayToCustomArray={addArrayToCustomArray}
        />
      </ul>
    </div>
  );
}
