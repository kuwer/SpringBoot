import './Counter.css'
import { useState } from 'react'
import CounterButton from './CounterButton'

export default function Counter(){
    
    const [count, setCount] = useState(0)

    function  incrementCounterParentFunction(by){
        setCount(count + by)
    }

    function  decrementCounterParentFunction(by){
        setCount(count - by)
    }

    function resetCount(){
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod = {decrementCounterParentFunction}/>
            <CounterButton by={2} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod = {decrementCounterParentFunction}/>
            <CounterButton by={3} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod = {decrementCounterParentFunction}/>
            <button className="resetButton" onClick={resetCount}>Reset</button>
        </>
    )
}

