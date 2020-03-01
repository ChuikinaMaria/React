import React, {useState} from 'react';

const Ex4 = ()=> {
    let now = Date.toTimeString();
    const [time, setTime] = useState(now);
    return (
        <section>
            <h1>{time}</h1>
            <button onClick={()=>{
                let now = Date();
                setTime(now)
            }}>Refresh</button>
        </section>
    )
};

export default Ex4;