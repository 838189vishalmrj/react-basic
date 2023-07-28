import React from 'react'
import { useState,useCallback } from 'react';
import Child from './Child';

const Parent = () => {

    const [number, setNumber] = useState(0)
    const [todo, setTodo] = useState([])

    console.log('parent component render');

    const handleClick = ()=>{
        return setNumber(pre => pre + 1)
    }

    const handleChildTodo = useCallback((commingTodo)=>{
            const newTodo = [...todo,commingTodo]
            setTodo(newTodo)
        },[todo])

    
  return (
    <div>
        <h1>Parent component reder {number}</h1>
        <button onClick={handleClick}>click</button>
        <Child todo={todo} handleChildTodo={handleChildTodo} />
    </div>
  )
}

export default Parent