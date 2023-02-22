import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => Math.floor(Math.random() * 100)),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => Math.floor(Math.random() * 100)),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

export default function LineChart({ state, makeListOfAverage }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const newArray = makeListOfAverage();
  const labels = newArray.map((assignment) => assignment.assignment);
  console.log(newArray);

  const data = {
    labels,
    datasets: [
      {
        label: "Difficulty",
        data: newArray.map((assignment) => assignment.averageDifficulty),
        // labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: "darkred",
        backgroundColor: "red",
      },
      {
        label: "fun",
        data: newArray.map((assignment) => assignment.averageFun),
        // labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: "green",
        backgroundColor: "limegreen",
      },
    ],
  };

  return <Line options={options} data={data} />;

  // <div>LineChart {state.test}</div>;
}
