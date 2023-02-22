import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App({ state, makeListOfAverage }) {
  return (
    <div className="App">
      <h1>student dashboard {state.test}</h1>
      <BarChart state={state} makeListOfAverage={makeListOfAverage} />
      <LineChart state={state} makeListOfAverage={makeListOfAverage} />
    </div>
  );
}

export default App;
