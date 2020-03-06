import React, {useState} from 'react';

const Ex5 = ()=>{
    const [state, setState] = useState(false);

    let display;

    if (state===true) {
        display = 'In'
    } else display = 'Out'

    const style ={};

    if (state === true) {
        style.backgroundColor = 'red';
    } else {
        style.backgroundColor = 'lightgray';
    }

        
    return (
        <section>
            <h1 style={style}>{display}</h1>
            <button onMouseEnter={()=>setState(true)}
            onMouseLeave={()=>setState(false)}>Hover over me</button>
        </section>
    )


}

export default Ex5;