import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import StudentList from "./components/StudentList";

function App({ state, makeListOfAverage, studentList }) {
  return (
    <div className="App">
      <h1>student dashboard {state.test}</h1>

      <BarChart state={state} makeListOfAverage={makeListOfAverage} />
      <LineChart state={state} makeListOfAverage={makeListOfAverage} />
      <ul className="name-list">
        <h2>student list:</h2>
        <StudentList state={state} studentList={studentList} />
      </ul>
    </div>
  );
}

export default App;
