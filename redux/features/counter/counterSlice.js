import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value:0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log(action.payload);
            state.value += action.payload
        },
    }
})

export default counterSlice.reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCounter = (state) => state.counter.value