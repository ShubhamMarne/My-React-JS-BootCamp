import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import {counterActions} from '../store/index.js';
import { useDebugValue } from 'react';
import { Component } from 'react';

const Counter = () => {

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({amount : 5}));
  };

  const decHandler = () => {
    dispatch(counterActions.decrement())
  };

  
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter}  --</div>}
      {!show && <div className={classes.value}></div>}
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;


// Redux with class based Components

// class Counter extends Component {

//   incHandler() {
//     this.props.inc();
//   }

//   decHandler() {
//     this.props.dec();
//   }

//   toggleCounterHandler() {

//   }



//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>-- {this.props.counter}  --</div>
//       <div>
//         <button onClick={this.incHandler.bind(this)}>Increment</button>
//         <button onClick={this.decHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//     </main>
//     );
//   }
// }


// // Maps state to prps
// const mapStateToProps = (state) => {
//   return {
//     counter : state.counter
//   };
// }

// // Maps dispatch. similar to useDispatch() with useSelector()
// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc : () => dispatch({ type : 'inc'}),
//     dec : () => dispatch({ type : 'dec'})
//   }
// }


// // first execute connect function which will return new function and then pass our function as arument.
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);