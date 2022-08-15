import React from 'react';
import './App.css';
import {Todo} from "./Todolist";

function App() {
    let title = "xxxx";
    let title2 = "cccc";

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    return (
        <div className="App">
            <Todo title={title} titleNew={100300} tasks={tasks1}/>
            <Todo title={title2} tasks={tasks2}/>
        </div>
    );
}



export default App;
