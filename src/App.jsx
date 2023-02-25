import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Student from "./components/pages/Student";

function App({
  state,
  addArrayToCustomArray,
  toggleState,
  epicStudentListMaker,
  makeListOfAverage,
  reset,
  changeIsChecked,
}) {
  return (
    <div className="App">
      <h1>student dashboard {state.test}</h1>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              state={state}
              addArrayToCustomArray={addArrayToCustomArray}
              toggleState={toggleState}
              epicStudentListMaker={epicStudentListMaker}
              makeListOfAverage={makeListOfAverage}
              changeIsChecked={changeIsChecked}
            />
          }
        ></Route>
        <Route
          path=":student"
          element={
            <Student
              state={state}
              addArrayToCustomArray={addArrayToCustomArray}
              toggleState={toggleState}
              reset={reset}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
