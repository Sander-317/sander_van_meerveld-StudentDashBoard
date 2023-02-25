import React from "react";
import { useParams } from "react-router-dom";
import BarChart from "../BarChart";
import CheckBoxes from "../CheckBoxes";
import LineChart from "../LineChart";
import StudentLinkList from "../StudentLinkList";

export default function Home({
  state,
  addArrayToCustomArray,
  toggleState,
  changeIsChecked,
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
          changeIsChecked={changeIsChecked}
        />
      </ul>
    </div>
  );
}
