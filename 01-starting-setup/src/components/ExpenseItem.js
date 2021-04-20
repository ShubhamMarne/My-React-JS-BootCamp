import React, { useState } from 'react'; 
import './ExpenseItem.css';
import NewItem from './NewItem.js';
import Card from './Card'



const ExpenseItem = (props) => 
{
    const [userInput, setUserInput] = useState({
        insurance : props.insurance,
        amount : props.amount
    });

    const clickHandler = (event) => {
        // only one state and state update will done by below function which will execute component function again
        // 1. This is not recommended approach as if multiple times state is getting updated this will not show latest state
        setUserInput({
            ...userInput,
            insurance : 'updated'
        });
        // 2. This is recommended approach as this will show latest state though multiple state update at a time.
        setUserInput((prevState) => {
            return {
                ...prevState,
                insurance : 'updated'
            }
        });
        
    }

    // part of child-parent communication
    const ondataHandler = (eventData) =>  {
        const data = {
            ...eventData,
            id : Math.random.toString()
        };
        console.log("Data is " + data);
    }

    return (
        <Card className="expense-item">
            <div className="expense-item__description   ">{props.date.toString()}</div>
            <div className="expense-item__price">{props.insurance}</div>
            <div>{props.amount}</div>
            <button onClick={clickHandler}>Click</button>
            <NewItem ondataAccesser={ondataHandler}> </NewItem>
        </Card>
    )

}



export default ExpenseItem;