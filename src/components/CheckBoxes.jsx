import React, { useState } from "react";

export default function CheckBoxes({ state, toggleState }) {
  const handleChange = (e) => {
    toggleState(e.target.value);
  };

  return (
    <div>
      <input
        checked={state.barChart}
        type="checkbox"
        value="bar"
        onChange={handleChange}
      ></input>
      <label> Show bar chart</label>
      <input
        checked={state.lineChart}
        type="checkbox"
        value={"line"}
        onChange={handleChange}
      ></input>
      <label> show Line Chart</label>
    </div>
  );
}
