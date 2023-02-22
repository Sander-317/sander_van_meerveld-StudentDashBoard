import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App({ state }) {
  return (
    <div className="App">
      <h1>student dashboard {state.test}</h1>
      <BarChart state={state} />
      <LineChart state={state} />
    </div>
  );
}

export default App;
