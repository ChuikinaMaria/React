import React, {useState} from 'react';

const Ex7 = () => {
    const [state, setState] = useState('');

    return (
        <section>
            <p>{state}</p>
            <button onClick={()=>setState('BLUE')}>Blue</button>
            <button onClick={()=>setState('YELLOW')}>Yellow</button>
            <button onClick={()=>setState('RED')}>Red</button>
        </section>
    )

}

export default Ex7;