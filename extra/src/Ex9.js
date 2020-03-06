import React, {useState} from 'react';

const Ex9=(props)=>{
    let words = props.sentence.split(' ')
    const [amount, setAmount] = useState(0)

    const display=()=>{
        let output=[];
        for (let i=0; i<=amount;i++) {
            output.push(' '+words[i])
            }
        return output;
    };

    const $buttonPrev =()=>{
        if (amount===0) {
            return <button disabled>Prevous</button> 
        } else {
            return <button onClick={()=>{setAmount(amount-1)}}>Prevous</button> 
        }
    }

    const $buttonNext=()=>{
        if (amount===words.length-1) {
            return <button disabled>Next</button>
        } else {
            return <button onClick={()=>{setAmount(amount+1)}}>Next</button>
        }
    }

    // (amount===0)? prevDis={disabled};
    // ? nextDis={disabled}:;

    return (
        <section> 
            <p>{display()}</p>
            {$buttonPrev()}
            {$buttonNext()}  
              
        </section>
    )
}

export default Ex9;