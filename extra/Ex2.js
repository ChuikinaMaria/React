import React, {useState} from 'react';

const Ex2 = () => {
    const [count, setCount] = useSate(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onclick={()=>{
                setCount(count+1)
            }}>Click Me!</button>
            <button onClick={()=>{
                setCount(0)
            }}>Reset</button>

        </div>
    )
};

export default Ex2;