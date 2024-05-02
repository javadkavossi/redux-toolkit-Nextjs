"use client"

import { decrement, increment, selectNumber } from '../../redux/features/number/numberSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Number() {

    const number = useSelector(selectNumber)
    const dispatch = useDispatch()


    return (
        <div><h1>Number {number.number}</h1>

            <button className='p-3 bg-green-500 rounded-lg' onClick={() => dispatch(increment())}>+</button>

            <button className='p-3 bg-red-500 rounded-lg' onClick={() => dispatch(decrement())}>-</button>

        </div>
    )
}

export default Number