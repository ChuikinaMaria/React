import React, {useState} from 'react';

const Ex6 = ()=>{
    const [count, setCount] = useState(0);

    let style = {};
    if (count%2===0) {
        style.backgroundColor = 'grey'
    } else {
        style.backgroundColor = 'lightgrey'
    }

    return (
        <section>
            <h1 style={style}>{count}</h1>
            <button onMouseEnter={()=>{setCount(count+1)}}>Hover over me!</button>
        </section>

    )

}

export default Ex6;