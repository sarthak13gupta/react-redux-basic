import { createSlice } from "@reduxjs/toolkit";

const initialCounterState =  {counter:0 ,showCounter :true};

const counterSlice = createSlice({
    name:'counter',
    initialState : initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;

        // it was forbidden to manipulate state , but here it seems to be allowed 
        // because of redux toolkit and its functions like createSlice , we cant accidently manipulate
        // the existing state , because redux toolkit internally uses another package imgur
        // which will detect code like this and which will automatically create a new state object 
        // keep all the state which we are not editing, and override the state which we are editing in a
        // immutable way , so we still have immutable code here even though it doesnt seem so 
        // because of an internally used package   
        },
          
        decrement(state) {
            state.counter --;
        },
        increase(state , action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
