import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    // ===== Counter App here ====
    name: 'counter',
    initialState,
    // actions called reducers
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }


})

// export the actions so we can use them thorough the App
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;