import React, { useState } from 'react'

const SmartCounter = () => {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([0]);
    
    const handleIncrement = () => {
        const newValue = count + 1;
        setCount(newValue);
            setHistory(prev => [...prev, newValue]);
            
        }
    
    const handleDecrement = () => {
        const newValue = count - 1;
        setCount(newValue);
            setHistory(prev => [...prev, newValue]);
          
        }
    
  return (
    <div>
        <h1>Counter: {count}</h1>
        <h2>History: {history.join(", ")}</h2>
        <button className='bg-green-500 text-white rounded-lg px-5 py-2 ' onClick={handleIncrement}>Increment</button>
        <button className='bg-red-500 text-white rounded-lg px-5 py-2' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default SmartCounter