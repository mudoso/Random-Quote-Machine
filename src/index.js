import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css'

import QuoteBox from './components/QuoteBox';

const colorList = [
    "#355070",
    "#6d597a",
    "#b56576",
    "#e56b6f",
    "#2ec4b6",
    "#011627",
    "#118ab2",
    "#073b4c",
    "#89b0ae",
]

const randomIndexOf = arr => arr[Math.floor(Math.random() * arr.length)]

const changeMainColor = (cssVariable, setProp) =>
    document.documentElement.style.setProperty(cssVariable, setProp)

const getRandomQuote = async () => {
    const res = await fetch("https://type.fit/api/quotes")
    const data = await res.json()
    return { ...randomIndexOf(data) }
}

const changeStyle = (target, styleObj, value) =>
    document.querySelector(target).style[styleObj] = value

function App() {
    const [quote, setQuote] = useState(() =>
        getRandomQuote().then(quote => {
            setQuote(quote)
            changeMainColor('--colored', randomIndexOf(colorList))
        })
    )

    const randomQuote = async () => {
        changeStyle("#text", "opacity", 0)
        changeStyle("#author", "opacity", 0)

        setTimeout(() => {
            getRandomQuote().then(quote => {
                setQuote(quote)

                changeMainColor('--colored', randomIndexOf(colorList))
                changeStyle("#text", "opacity", 1)
                changeStyle("#author", "opacity", 1)
            })
        }, 500);
    }

    return (
        <>
            <QuoteBox randomQuote={randomQuote} quote={quote} />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))