import { createReducer} from '@reduxjs/toolkit';

const init = {  // init = initial State
    c : 20,
}

// a reducer have 2 objects as arguments a) as init b) action taken
export const customReducer = createReducer(init, {
    increment: (state)=>{
        state.c += 1;
        // here we are increamenting using constant value so we do not need action 
    },
    incrementByVal: (state, action)=>{
        state.c += action.payload;
        // if we want to take incrementing value from user 
    },
    decrement: (state)=>{
        state.c -= 1;
    },
} )