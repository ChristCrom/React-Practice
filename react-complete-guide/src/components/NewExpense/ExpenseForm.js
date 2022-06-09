import { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [button, setButton] = useState('0');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };
    const newExpenseButtonHandler = event =>{
      setButton('1');
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        setButton('0');

 
    };
    const cancelHandler = event =>{
        setButton('0');
    }

    if(button === '0'){
    return <button onClick = {newExpenseButtonHandler}>Add New Expense</button>}
    if(button === '1')
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
        </div>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
        </div>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date'  value={enteredAmount} onChange={dateChangeHandler}></input>
            </div>
        </div>
        <button onClick = {cancelHandler}>Cancel</button>
        <button type="submit">Submit</button>
    </form>
    );

};

export default ExpenseForm;