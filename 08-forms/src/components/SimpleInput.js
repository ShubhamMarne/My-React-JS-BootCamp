import {useState} from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if(!enteredNameIsValid){
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);

    alert("Submitted successfully....");
    console.log("submitted" + enteredName);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}/>
        {nameInputIsValid && <p>  Invalid Input </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
