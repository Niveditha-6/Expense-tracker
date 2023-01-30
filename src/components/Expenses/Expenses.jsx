import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <div className="expenseConatiner">
            <ExpenseItem expense={expense} />
          </div>
        );
      })}
    </Card>
  );
}
