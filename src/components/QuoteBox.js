import React from 'react'


export default function QuoteBox({ randomQuote, quote }) {

    const { text, author } = quote
    const twitterShareHref = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
        + encodeURIComponent(`"${text}" - ${author}`)

    return (
        <div id="quote-box">
            <div className="quote-div">
                <p id="text">
                    <i className="fas fa-quote-left"></i>
                    {text}
                    <i className="fas fa-quote-right"></i>
                </p>
                <p id="author">- {author ? author : 'Unknown'}</p>
            </div>
            <div className="btn-div">
                <a
                    id="tweet-quote"
                    className="social-media"
                    href={twitterShareHref}
                    target="_top"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <button onClick={randomQuote} id="new-quote">New quote</button>
            </div>
        </div >
    )
}
