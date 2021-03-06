import React from 'react';

function App(props) {
    return (
        <section id="app">
            <h1 data-testid="title" id='title'>{props.title}</h1>
            {props.addDescription === true ? <p data-testid="description">This is a description of my app</p> : null}
            {props.articles ? props.articles.map((article, i) => <NewsArticle key = {i} ArtTitle = {article.title} text = {article.text} />) : null}
            {props.articles ? (
                <p data-testid="reading-length">
                    Reading all article will take you {props.calculateReadingLength && props.calculateReadingLength(props.articles.reduce((accumulator, article) => accumulator + article.text , ''))}
                </p>
            ): null}
        </section>
    );
}

function NewsArticle(props) {
    return (
        <article data-testid="news-article">
            <h1>{props.ArtTitle}</h1>
            <p>{props.text}</p>
        </article>
    );
}

export { App };