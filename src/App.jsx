import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Student from "./components/pages/Student";

function App({
  state,
  addArrayToCustomArray,
  toggleState,
  epicStudentListMaker,

  reset,
  changeIsChecked,
  getArrayOfAverage,
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
              changeIsChecked={changeIsChecked}
              getArrayOfAverage={getArrayOfAverage}
              reset={reset}
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
              changeIsChecked={changeIsChecked}
              getArrayOfAverage={getArrayOfAverage}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
