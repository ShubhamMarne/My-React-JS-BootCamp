import ExpenseItem from './components/ExpenseItem';

const App = () =>  {
  const arr = [
    {date : new Date(), 
    insurance : 'first' ,
    amount : '$21.05'
   },
   {date : new Date(), 
    insurance : 'second' ,
    amount : '$356.05'
   },
   {date : new Date(), 
    insurance : 'third' ,
    amount : '$2125.05'
   }
  ];

  return (
    <div>
      <h2>Let's get started with react js !</h2>
      <ExpenseItem date={arr[0].date} insurance={arr[0].insurance} amount={arr[0].amount}></ExpenseItem>
      <ExpenseItem date={arr[1].date} insurance={arr[1].insurance} amount={arr[1].amount}></ExpenseItem>
      <ExpenseItem date={arr[2].date} insurance={arr[2].insurance} amount={arr[2].amount}></ExpenseItem>
    </div>
  );
}

export default App;
