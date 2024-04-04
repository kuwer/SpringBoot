export default function CounterButton({by, incrementMethod, decrementMethod}){

    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
            <button className="counterButton" 
                onClick={() => incrementMethod(by)}
                >+{by}
            </button>
            <button className="counterButton" 
                onClick={() => decrementMethod(by)}
                >-{by}
            </button>
            </div>
           
        </div>
    )
}