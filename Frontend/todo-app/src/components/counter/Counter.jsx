import './Counter.css'
import { useState } from 'react'

export default function Counter(){

    const [count, setCount] = useState(0)

    function incrementCounter(){
        setCount(count + 1)

    }
    function decrementCounter(){
        setCount(count - 1)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
            <button className="counterButton" 
                onClick={incrementCounter}
                >+1
            </button>
            <button className="counterButton" 
                onClick={decrementCounter}
                >-1
            </button>
            </div>
           
        </div>
    )
}