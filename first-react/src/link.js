import { useState } from "react";

export function Link () {
    
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>
                </button>
            </div>
            <div>{counter}</div>
        </div>
    )
}   