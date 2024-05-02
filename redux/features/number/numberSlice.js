import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "../counter/counterSlice";

const initialState = {
    number: 0
}


const numberSlice = createSlice({
    name: 'number',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.number += 1
        },
        decrement: (state) => {
            state.number -= 1
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementCounter, (state, action) => {
            state.number++
        })
    }
})

export default numberSlice.reducer
export const { increment, decrement } = numberSlice.actions
export const selectNumber = (state) => state.number