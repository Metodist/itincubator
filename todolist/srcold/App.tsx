import React, {useState} from 'react';
import './App.css';
import {Todo} from "./Todolist";
import { v1 } from 'uuid';

function App() {
    let title = "it incubator Todolist";


    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactJS2", isDone: false}
    ])


    const removeTask = (id: string) => {
        setTasks(tasks.filter((el) => el.id !== id))
    }


    const addTask = () =>{
        console.log("1")

    }

    return (
        <div className="App">
            <Todo title={title}
                  titleNew={100300}
                  tasks={tasks}
                  removeTask={removeTask}
                  addTasks={addTask}
            />

        </div>
    );
}


export default App;
