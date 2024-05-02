"use client"

import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux"
import {
    increment,
    decrement,
    incrementByAmount,
    selectCounter
} from "../../redux/features/counter/counterSlice"


function Counter() {
    const [value, setValue] = useState(2)
    const counter = useSelector(selectCounter);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("counter", counter);
        console.log(value);
    }, [value])


    return (
        <>
            <h2>counter is {counter}</h2>
            <button className='p-3 bg-green-500 rounded-lg' onClick={() => dispatch(increment())}>+</button>
            <button className='p-3 bg-red-500 rounded-lg' onClick={() => dispatch(decrement())}>-</button>

            <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <br />
            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={() => dispatch(incrementByAmount(+value))}>increment by Amount</button>
        </>
    )
}

export default Counter