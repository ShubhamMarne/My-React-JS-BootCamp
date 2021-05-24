import { createSlice, configureStore} from '@reduxjs/toolkit';
//configureStore is used for combining multiple reducers.

const initialState = {counter : 0, showCounter : true};

// Counter reducer or counter slice
const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload.amount;
        }, 
        toggleCounter(state){
            debugger;
            state.showCounter = !state.showCounter;
        }
    }
});

const intialAuthState = { isAuthenticated : false};

const authSlice = createSlice({
    name : 'auth',
    initialState : intialAuthState,
    reducers : {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

// Below code is purely redux code.
// Fo state manupulation we have above redux toolkit code
// const counterReducer = (state = initialState, action) => {
//     if(action.type == 'inc'){
//         return {
//             counter : state.counter + 1,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type == 'incWithValue'){
//         return {
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type == 'dec'){
//         return {
//             counter : state.counter - 1,
//             showCounter : state.showCounter
//         }
//     }
    

//     if(action.type == 'toggle'){
//         return {
//             counter : state.counter,
//             showCounter : !state.showCounter
//         }
//     }

//     return state;
// }

const store = configureStore({
    // Combine all reducers like map and pass to configureStore.
    reducer:{ counter : counterSlice.reducer, auth : authSlice.reducer},
});


// Redux toolkit automatically creates actions.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;


