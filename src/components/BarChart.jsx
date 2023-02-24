import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import data from "../assets/data";
import { useParams } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ state }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: state.home
          ? "chart of all students"
          : "chart of " + state.customDataNamesList.map((item) => item),
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 80,
          minRotation: 40,
        },
      },
    },
  };

  const params = useParams();
  console.log("home params", params.student);
  // const labels = state.singleStudentData.map((student) => student.assignment);

  // const newArray = state.home
  //   ? state.ListAllStudentAverage
  //   : state.customDataList;
  const newArray = state.ListAllStudentAverage;
  const newerArray = state.customDataList;

  const labels = newArray.map((assignment) => assignment.assignment);
  // console.log(newArray);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Difficulty",
        data: state.home
          ? newArray.map((assignment) => assignment.averageDifficulty)
          : newerArray.map((assignment) => assignment.difficulty),
        // data: newArray.map((assignment) => assignment.averageDifficulty),
        // state.singleStudentData.map((student) => student.difficulty),
        // labels.map(() => Math.floor(Math.random() * 100)),

        backgroundColor: "darkred",
      },
      {
        label: "Fun",
        data: state.home
          ? newArray.map((assignment) => assignment.averageFun)
          : newerArray.map((assignment) => assignment.fun),

        // data: newArray.map((assignment) => assignment.averageFun),
        // labels.map(() => Math.floor(Math.random() * 100)),
        // state.singleStudentData.map((student) => student.fun),
        backgroundColor: "green",
      },
    ],
  };
  return <Bar options={options} data={chartData} />;
  // (
  //   <div>
  //     {state.singleStudentData.map((student) => (
  //       <div>{student.assignment}</div>
  //     ))}
  //   </div>
  // );

  // <div>BarChart {state.test}</div>;
}
