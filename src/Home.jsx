import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
export default function Home() {
    
    const dispatch = useDispatch(); // use dispatch is used to trigger the action 

    // const {c} = useSelector(state => state.custom);

    const count = useSelector(state => state.custom.c);
    // useSelector is used to fetch the init value from reducer
    const addBtn = ()=>{
        dispatch({
            type: "increment",
        })
    };
    const addBtn10 = ()=>{
        dispatch({
            type: "incrementByVal",
            payload: 10,
        })
    };
    const subBtn = ()=>{
        dispatch({
            type: "decrement",
        })
    }
    
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={addBtn}>Increment</button>
        <button onClick={addBtn10}>Increment By 10</button>
        <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

