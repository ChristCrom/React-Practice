import Card from '../UI/Card';
import './ExpenseItem.css'
import React, { useState } from 'react';

function ExpenseItem(ex) {
 const [title, setTitle] = useState(ex.title);

  const clickHandler = () => {
    console.log("clicked omg omg");
    setTitle('updated!');
  }


  return (
      
    <Card className="expense-item">
      <div className ='expense-date'>{ex.date.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${ex.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
