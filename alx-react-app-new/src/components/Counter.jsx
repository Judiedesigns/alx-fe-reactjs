import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0); 
    return(
        <div>
            <p style={{ fontSize: '100px', color: 'gold'}}>{count}</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center'}}>
                <button onClick = {() => setCount(count + 1)}>add count</button>
                <button onClick ={() => setCount(count - 1)}>minus count</button>
                <button onClick={() => setCount(0)}>clear count</button>
            </div>
        </div>
    );
} 