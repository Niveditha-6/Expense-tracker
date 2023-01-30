import React from "react";
import "./ExpenseDate.css";
import Card from "../UI/Card";

export default function ExpenseDate({ expenseDate }) {
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const date = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.getFullYear();
  return (
    <div className="dateContainer">
      <div className="month">{month}</div>
      <Card className="date">{date}</Card>
      <div className="year">{year}</div>
    </div>
  );
}
