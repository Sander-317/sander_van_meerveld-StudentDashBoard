import React from "react";
import BarChart from "../BarChart";
import CheckBoxes from "../CheckBoxes";
import LineChart from "../LineChart";
import StudentLinkList from "../StudentLinkList";

export default function Home({
  state,
  addArrayToCustomArray,
  toggleState,

  getArrayOfAverage,
  reset,
}) {
  return (
    <div>
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
        <h2>student list:</h2>
        <StudentLinkList
          state={state}
          addArrayToCustomArray={addArrayToCustomArray}
          toggleState={toggleState}
        />
      </ul>
    </div>
  );
}
