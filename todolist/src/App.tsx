import React, {useState} from 'react';
import './App.css';
import {Todo} from "./Todolist";

function App() {
    let title = "it incubator Todolist";


    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS2", isDone: false}
    ])


    const removeTask = (id: number) => {
        setTasks(tasks.filter((el) => el.id !== id))
    }


    return (
        <div className="App">
            <Todo title={title}
                  titleNew={100300}
                  tasks={tasks}
                  removeTask={removeTask}
            />

        </div>
    );
}


export default App;

/*
return (
    <div className="App">
        <Todo title={title}
              titleNew={100300}
              tasks={filteredTasks}
              removeTask={removeTask}
              filteredTask={filteredButton}/>
    </div>
);*/
