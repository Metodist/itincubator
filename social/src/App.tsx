import React from 'react';
import './App.css';

function App() {
  return (
   <div>
     <h1>hello!</h1>
       <Rating />
       <Accordion />

   </div>
  );
}

export default App;

function Accordion (){
    return(
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Rating(){
    return(
        <div>
            <h3>Рейтинг</h3>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star (){
    return(
        <div>star</div>
    )
}