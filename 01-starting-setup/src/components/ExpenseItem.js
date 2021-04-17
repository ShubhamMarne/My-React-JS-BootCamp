import './ExpenseItem.css';

function ExpenseItem()
{
    const date = new Date();
    const insurcane = 'car insurcane';
    const amount = '$252.25';
    return (
        <div className="expense-item">
            <div className="expense-item__description">{date.toString()}</div>
            <div className="expense-item__price">{insurcane}</div>
            <div>{amount}</div>
        </div>
    )

}

export default ExpenseItem;