import React from 'react';

function App() {
    const result = 23434 * 0.345;
    return (
        <section>
            <h1>The Example App</h1>
            <NewsArticle />
            <p>
                Renders the value of a variable: <span>{result}</span>
            </p>
            <button data-testid="load-more" onClick={() => { console.log('The button was clicked') }}>Load More</button>
        </section>
    );
}

function NewsArticle() {
    return (
        <article>
            <h1>Article</h1>
        </article>
    )
}

function MyApp() {
    const text = "My First React App";
    
    return (
        <div>
        <p>{text}</p>
        <TwoHundredArticles />
        </div>
    )
};

function TwoHundredArticles() {
    let Articles = [];
    for (let i = 0; i<200; i++) {
        Articles.push(<NewsArticle key = {i}/> );
    }
    return Articles;
}
export { App, MyApp };