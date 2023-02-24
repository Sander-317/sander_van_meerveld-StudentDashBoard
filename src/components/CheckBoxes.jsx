import React, { useState } from "react";

export default function CheckBoxes({ state, toggleState }) {
  const handleChange = (e) => {
    toggleState(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          checked={state.barChart}
          type="checkbox"
          value="bar"
          onChange={handleChange}
        ></input>
        Show bar chart
      </label>
      <label>
        <input
          checked={state.lineChart}
          type="checkbox"
          value={"line"}
          onChange={handleChange}
        ></input>
        Show Line Chart
      </label>
      <label>
        <input
          checked={state.showFun}
          type="checkbox"
          value={"fun"}
          onChange={handleChange}
        ></input>
        Show fun in Chart
      </label>
      <label>
        <input
          checked={state.showDifficulty}
          type="checkbox"
          value={"difficulty"}
          onChange={handleChange}
        ></input>
        Show difficulty in Chart
      </label>
    </div>
  );
}
