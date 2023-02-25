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

export default function LineChart({ state, getArrayOfAverage }) {
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
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 80,
          minRotation: 40,
        },
      },
    },
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
  };
  const allStudentArray = getArrayOfAverage(state.data);
  const customArray = getArrayOfAverage(state.customDataList);
  const labels = allStudentArray.map((assignment) => assignment.assignment);

  const data = {
    labels,
    datasets: [
      {
        label: "Difficulty",
        data: state.home
          ? allStudentArray.map((assignment) => assignment.averageDifficulty)
          : customArray.map((assignment) => assignment.averageDifficulty),
        borderColor: "darkred",
        backgroundColor: "red",
      },
      {
        label: "fun",
        data: state.home
          ? allStudentArray.map((assignment) => assignment.averageFun)
          : customArray.map((assignment) => assignment.averageFun),
        borderColor: "green",
        backgroundColor: "limegreen",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
