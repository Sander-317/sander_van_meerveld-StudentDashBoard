import React from "react";
import BarChart from "../BarChart";
import CheckBoxes from "../CheckBoxes";
import LineChart from "../LineChart";
import StudentList from "../StudentList";

export default function Student({
  state,
  addArrayToCustomArray,
  toggleState,
  reset,
  getArrayOfAverage,
}) {
  return (
    <div>
      {" "}
      <CheckBoxes state={state} toggleState={toggleState} reset={reset} />
      {state.barChart ? (
        <BarChart state={state} getArrayOfAverage={getArrayOfAverage} />
      ) : (
        ""
      )}
      {state.lineChart ? (
        <LineChart state={state} getArrayOfAverage={getArrayOfAverage} />
      ) : (
        ""
      )}
      <ul className="name-list">
        <h2>add student data:</h2>
        <button onClick={() => reset()}> reset data</button>
        <StudentList
          state={state}
          addArrayToCustomArray={addArrayToCustomArray}
        />
      </ul>
    </div>
  );
}
