import React, { useState } from 'react'; 
import './ExpenseItem.css';
import Card from './Card'



const ExpenseItem = (props) => 
{
    const [insurance, setTitle] = useState(props.insurance);

    const clickHandler = () => {
        setTitle('new insurance');
        console.log(insurance);
    }

    return (
        <Card className="expense-item">
            <div className="expense-item__description   ">{props.date.toString()}</div>
            <div className="expense-item__price">{insurance}</div>
            <div>{props.amount}</div>
            <button onClick={clickHandler}>Click</button>
        </Card>
    )

}



export default ExpenseItem;