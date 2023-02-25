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

export default function BarChart({ state, getArrayOfAverage }) {
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

  // const newArray = state.ListAllStudentAverage;
  const newArray = getArrayOfAverage(state.data);
  const newerArray = getArrayOfAverage(state.customDataList);
  // const newerArray = state.customDataList;

  // getArrayOfAverage(state.customDataList);

  const labels = newArray.map((assignment) => assignment.assignment);

  const chartData = {
    labels,
    datasets: [
      state.showDifficulty
        ? {
            label: "Difficulty",
            data: state.home
              ? newArray.map((assignment) => assignment.averageDifficulty)
              : newerArray.map((assignment) => assignment.averageDifficulty),
            backgroundColor: "darkred",
          }
        : "",
      state.showFun
        ? {
            label: "Fun",
            data: state.home
              ? newArray.map((assignment) => assignment.averageFun)
              : newerArray.map((assignment) => assignment.averageFun),
            backgroundColor: "green",
          }
        : "",
    ],
  };
  return <Bar options={options} data={chartData} />;
}
