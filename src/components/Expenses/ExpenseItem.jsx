import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
export default function ExpenseItem({ expense }) {

  return (
    <Card className="expenseItemContainer">
      <ExpenseDate expenseDate={expense.date} />
      <div className="title">
        <h2>{expense.title }</h2>
      </div>
      <Card className="amount">{expense.amount}</Card>
    </Card>
  );
}
