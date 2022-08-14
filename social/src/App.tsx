import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <h1>hello!</h1>
            <Rating/>
            <Accordion/>

        </div>
    );
}

export default App;

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>

        </div>

    )
}

function Rating() {
    return (
        <div>
            <h3>Рейтинг</h3>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>
    )
}

function AccordionTitle() {
    return <h3>Меню</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}