import React from 'react';
import ReactDom from 'react-dom';
import Ex1 from './Ex1';

const App = () => {
    return (
        <section className = 'App'>
            <h1>React Week 4 - Extra Exercises</h1>
            
                <h3>Exercise 1</h3>
                <Ex1/>
                <h3>Exercise 2</h3>
                <Ex2/>
                <h3>Exercise 3</h3>
                <Ex3/>
                <h3>Exercise 4</h3>
                <Ex4/>
                <h3>Exercise 5</h3>
                <Ex5/>
                <h3>Exercise 6</h3>
                <Ex6/>
                <h3>Exercise 7</h3>
                <Ex7/>
                <h3>Exercise 8</h3>
                <Ex8/>
                <h3>Exercise 9</h3>
                <Ex9/>

        </section>
    )
};

ReactDom.render(<App/>, document.getElementById('root'));
