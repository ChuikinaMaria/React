import React from 'react';
import ReactDom from 'react-dom';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';

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
               

        </section>
    )
};

ReactDom.render(<App/>, document.getElementById('root'));
