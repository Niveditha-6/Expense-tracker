import React from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import useForm from "./useForm";

export default function NewExpense() {

  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(values);
  //     //clearing values
  //     setState({});
  //   };

  const addExpense = () => {
    console.log(values);
    setState({});
  };

  const [values, handleInputChange, setState, handleSubmit] =
    useForm(addExpense);

  return (
    <Card className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="newExpenseGridContainer">
          <div className="newExpensetitle">
            <label>Title</label>
            <input type="text" onChange={handleInputChange} name="title" />
          </div>

          <div className="newExpenseamount">
            <label>Amount</label>
            <input type="text" onChange={handleInputChange} name="amount" />
          </div>

          <div className="newExpensedate">
            <label>Date</label>
            <input type="date" onChange={handleInputChange} name="date" />
          </div>
        </div>

        <button className="addExpenseButton">Add Expense</button>
      </form>
    </Card>
  );
}
