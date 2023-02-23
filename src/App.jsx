import { Route, Routes } from "react-router-dom";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import Home from "./components/pages/Home";
import StudentList from "./components/StudentList";

function App({ state }) {
  return (
    <div className="App">
      <h1>student dashboard {state.test}</h1>
      <Routes>
        <Route path="/" element={<Home state={state} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
