import React from 'react';
import ReactDom from 'react-dom';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex9 from './Ex9';

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
                <Ex8 sentence="The pigs were insulted that they were named hamburgers."/>
                <h3>Exercise 9</h3>
                <Ex9 sentence="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
               

        </section>
    )
};

ReactDom.render(<App/>, document.getElementById('root'));
