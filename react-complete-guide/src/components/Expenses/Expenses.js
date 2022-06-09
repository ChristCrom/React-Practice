import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
  const [year, setYear] = useState('2020')
const FilterChange = selectedYear =>{
  
    setYear(selectedYear);

};
const filteredExpenses = props.items.filter(expense => {
  if(year != 'All'){
  return expense.date.getFullYear().toString() === year;
  }
  else{
  return props.items
  }

})

      return (
        <div>
        <Card className="expenses">
         <ExpenseFilter selected={year} onFilterChange = {FilterChange} /> 
         <ExpensesChart expenses = {filteredExpenses} />
         <ExpensesList items = {filteredExpenses}/>
         
        </Card>
        </div>
      );
}

export default Expenses;