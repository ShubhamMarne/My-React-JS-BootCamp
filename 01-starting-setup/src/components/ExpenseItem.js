import './ExpenseItem.css';

function ExpenseItem(props)
{
    
    return (
        <div className="expense-item">
            <div className="expense-item__description   ">{props.date.toString()}</div>
            <div className="expense-item__price">{props.insurance}</div>
            <div>{props.amount}</div>
        </div>
    )

}

export default ExpenseItem;