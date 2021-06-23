import {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const showFormHandler = () =>{
    showForm ? setShowForm(false) : setShowForm(true)
  }
  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && <ExpenseForm showFormHandler={showFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  );
};

export default NewExpense;
