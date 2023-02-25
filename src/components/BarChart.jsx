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

  const allStudentArray = getArrayOfAverage(state.data);
  const customArray = getArrayOfAverage(state.customDataList);
  const labels = allStudentArray.map((assignment) => assignment.assignment);

  const chartData = {
    labels,
    datasets: [
      state.showDifficulty
        ? {
            label: "Difficulty",
            data: state.home
              ? allStudentArray.map(
                  (assignment) => assignment.averageDifficulty
                )
              : customArray.map((assignment) => assignment.averageDifficulty),
            backgroundColor: "darkred",
          }
        : "",
      state.showFun
        ? {
            label: "Fun",
            data: state.home
              ? allStudentArray.map((assignment) => assignment.averageFun)
              : customArray.map((assignment) => assignment.averageFun),
            backgroundColor: "green",
          }
        : "",
    ],
  };
  return <Bar options={options} data={chartData} />;
}
