import React, {useState} from 'react';

const Ex8 = (props)=>{
      
    let words = props.sentence.split(' ')
    const [amount, setAmount] = useState(0)

    const display=()=>{
        let output=[];
        for (let i=0; i<=amount;i++) {
            output.push(' '+words[i])
            }
        return output;
    };

    return (
        <section>
            <p>{display()}</p>
            <button onClick={()=>{setAmount((amount===0)? 0: amount-1)}}>Prevous</button> 
            <button onClick={()=>{setAmount((amount===words.length-1)? amount: amount+1)}}>Next</button>  
        </section>
    )



}

export default Ex8;