import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "My baby's Birthday",
      date: new Date(1999, 2, 6),
      amount: "$6000",
    },
    {
      title: "My  Birthday",
      date: new Date(2000, 2, 13),
      amount: "$8000",
    },
    {
      title: "Books",
      date: new Date(2021, 9, 21),
      amount: "$3000",
    },
  ];
  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
