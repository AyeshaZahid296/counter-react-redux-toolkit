import { createSlice } from "@reduxjs/toolkit";
// createSlice action , reducers and initial state in teeno ko ak saat define karnay ki saholit data ha..

// state ak muatiable data hota ha...

const initialState = { count: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        reset: (state) => { state.count = 0 },
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
//this method is called object destructuring, 