import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="App">
      <h1>student dashboard</h1>
      <BarChart />
      <LineChart />
    </div>
  );
}

export default App;
