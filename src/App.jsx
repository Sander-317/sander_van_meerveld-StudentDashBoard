import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import StudentList from "./components/StudentList";

function App({ state, makeListOfAverage, studentList }) {
  const nameList = studentList();
  console.log(nameList);
  return (
    <div className="App">
      <h1>student dashboard {state.test}</h1>
      {nameList.map((student) => (
        <div>{student.name}</div>
      ))}
      <BarChart state={state} makeListOfAverage={makeListOfAverage} />
      <LineChart state={state} makeListOfAverage={makeListOfAverage} />
      <StudentList />
    </div>
  );
}

export default App;
