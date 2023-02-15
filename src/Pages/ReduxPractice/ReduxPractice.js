import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counter, { Increment, Decrement } from './CounterSlice'


const ReduxPractice = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    // const CounterNumbers = ()=>{
    //     setCounter(prevCount => prevCount + 1)
    // }
  return (
    <div className='contain'>
        <h1> You clicked {count} times </h1><br/>
        <button onClick={()=> dispatch(Increment())}>Increment</button>
        <button onClick={()=> dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default ReduxPractice