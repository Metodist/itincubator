import React, {useState} from 'react';
import './App.css';
import {Todo} from "./Todolist";

function App() {
    let title = "it incubator Todolist";

    //export type FilteredType = All|

    let [tasks1, setTasks1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS2", isDone: false}
    ])



    let [filteredValue, setFilteredValue] = useState('All')


    let filteredTasks = tasks1;

    if (filteredValue === 'Active') {
        filteredTasks = tasks1.filter((el) => el.isDone)
    }

    if (filteredValue === 'Completed') {
        filteredTasks = tasks1.filter((el) => !el.isDone)
    }


    const filteredTask = (button: string) => {
        setFilteredValue(button)
    }

    const removeTask = (id: number) => {
        setTasks1(tasks1.filter((el) => el.id !== id))
    }

    return (
        <div className="App">
            <Todo title={title}
                  titleNew={100300}
                  tasks={filteredTasks}
                  removeTask={removeTask}
                  filteredTask={filteredTask}/>
        </div>
    );
}


export default App;