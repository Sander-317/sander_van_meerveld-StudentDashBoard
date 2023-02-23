import React from "react";
import BarChart from "../BarChart";
import LineChart from "../LineChart";
import StudentList from "../StudentList";

export default function Home({ state }) {
  return (
    <div>
      <BarChart state={state} />
      <LineChart state={state} />
      <ul className="name-list">
        <h2>student list:</h2>
        <StudentList state={state} />
      </ul>
    </div>
  );
}
