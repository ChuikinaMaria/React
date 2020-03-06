import React, {useState} from 'react';

const Ex4 = ()=> {
    const getTime=()=>{
        let now = new Date();
        let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        return time;
        }    

    const [time, setTime] = useState(getTime());
    return (
        <section>
            <h1>{time}</h1>
            <button onClick={()=>{
                setTime(getTime())
            }}>Refresh</button>
        </section>
    )
};

export default Ex4;