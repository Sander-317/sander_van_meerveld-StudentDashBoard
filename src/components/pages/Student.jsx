import React from "react";
import BarChart from "../BarChart";
import CheckBoxes from "../CheckBoxes";
import LineChart from "../LineChart";
import StudentList from "../StudentList";

export default function Student({ state, addArrayToCustomArray, toggleState }) {
  return (
    <div>
      {" "}
      <CheckBoxes state={state} toggleState={toggleState} />
      {state.barChart ? <BarChart state={state} /> : ""}
      {state.lineChart ? <LineChart state={state} /> : ""}
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
