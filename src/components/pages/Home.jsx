import React from "react";
import BarChart from "../BarChart";
import LineChart from "../LineChart";
import StudentLinkList from "../StudentLinkList";

export default function Home({ state, addArrayToCustomArray }) {
  return (
    <div>
      <BarChart state={state} />
      <LineChart state={state} />
      <ul className="name-list">
        <h2>student list:</h2>
        <StudentLinkList
          state={state}
          addArrayToCustomArray={addArrayToCustomArray}
        />
      </ul>
    </div>
  );
}
