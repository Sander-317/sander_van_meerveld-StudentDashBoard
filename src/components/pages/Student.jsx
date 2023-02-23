import React from "react";
import { useParams } from "react-router-dom";

export default function Student() {
  const student = useParams();
  //   console.log(student);
  return <div>Student = {student.student}</div>;
}
