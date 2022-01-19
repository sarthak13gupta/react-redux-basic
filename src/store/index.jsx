import { configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter.jsx' 
import authReducer from './auth.jsx'

// const counterReducer = (state = initialState  , action) => {
    
//     if(action.type === 'increment')

//     // state.counter++ ----> never do this , we should never alter the state 
//     //                       rather we should just copy and create new objects
//     //                       like below


//     return {
//         counter : state.counter + 1,
//         showCounter : state.showCounter
//     };

//     if(action.type === 'increase')
//     return {
//         counter : state.counter + action.amount,
//         showCounter : state.showCounter
//     };
    
//     if(action.type === 'decrement')
//     return {
//         counter : state.counter - 1,
//         showCounter : state.showCounter
//     };

//     if(action.type === 'toggle')
//     return {
//         showCounter : !state.showCounter,
//         counter : state.counter
//     }
    
//     return state;
// };




const store = configureStore({
    reducer :{counter : counterReducer , auth : authReducer}
});


export default store;
