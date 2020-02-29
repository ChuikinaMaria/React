import React, {useState} from 'react';

const Ex3 = ()=>{
    const [count, setCount] = useState(0);

    let p = count;
    if (p!==0 && p%15===0) {
        p = "FizzBuzz"
    } else if (p!==0 && p%5===0) {
        p = "Buzz"
    } else if (p!==0 && p%3===0) {
        p = "Fizz"
    };
    
    return (
        <div>
            <p>{p}</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>Click Me!</button>
        </div>
    )   

};

export default Ex3;