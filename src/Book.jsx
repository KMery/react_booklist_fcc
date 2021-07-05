import React from 'react';

const Book = (props) => {
    const { img, title, author } = props;
    const clickHandler = () => {
        alert(`Hello! ${title} was your selection`)
    }

    return (
        <article className="book">
        <img src={img} alt="book_img" />
        <h1> {title} </h1>
        <h4> {author.toUpperCase()} </h4>
        <button type='button' onClick={clickHandler} className="button-select">Example button</button>
        </article>
    )
};

export default Book;
