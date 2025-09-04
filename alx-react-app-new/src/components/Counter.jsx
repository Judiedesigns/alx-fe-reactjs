import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0); 
    return(
        <div>
            <p style={{ fontSize: '100px', color: 'gold'}}>{count}</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center'}}>
                <button onClick = {() => setCount(count + 1)}>Increment</button>
                <button onClick ={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
} 