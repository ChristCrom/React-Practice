import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(ex) {
  const clickHandler = () => {
    console.log("clicked omg omg");
  }


  return (
      
    <Card className="expense-item">
      <div className ='expense-date'>{ex.date.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{ex.title}</h2>
        <div className='expense-item__price'>${ex.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
