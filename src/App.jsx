import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Student from "./components/pages/Student";

function App({ state, addArrayToCustomArray, toggleState }) {
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
            />
          }
        ></Route>
        <Route
          path=":student"
          element={
            <Student
              state={state}
              addArrayToCustomArray={addArrayToCustomArray}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
