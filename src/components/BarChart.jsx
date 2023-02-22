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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const singleStudentData = data.filter((student) => student.name === "Sandra");
// console.log(singleStudentData);

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

// const labels = singleStudentData.map((student) => student.assignment);
// console.log("labels", labels);

// const chartData = {
//   labels,
//   datasets: [
//     {
//       label: "Difficulty",
//       data: singleStudentData.map((student) => student.difficulty),
//       // labels.map(() => Math.floor(Math.random() * 100)),
//       backgroundColor: "darkred",
//     },
//     {
//       label: "Fun",
//       data: singleStudentData.map((student) => student.fun),
//       // labels.map(() => Math.floor(Math.random() * 100)),
//       backgroundColor: "green",
//     },
//   ],
// };

export default function BarChart({ state }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: state.test,
      },
    },
  };

  const labels = state.singleStudentData.map((student) => student.assignment);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Difficulty",
        data: state.singleStudentData.map((student) => student.difficulty),
        // labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: "darkred",
      },
      {
        label: "Fun",
        data: state.singleStudentData.map((student) => student.fun),
        // labels.map(() => Math.floor(Math.random() * 100)),
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