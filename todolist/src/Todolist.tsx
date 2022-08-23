import React from "react";

type TodolistPropsType={
    title: string
    titleNew?: number
    tasks: Array<TaskType>
    removeTask:(id: number)=>void
    filteredTask:(button:string)=>void

}

type TaskType={
    id: number
    title: string
    isDone: boolean
}

export const Todo =(props: TodolistPropsType)=>{
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el,index)=>{
                    return(
                        <li key={el.id}>
                            <button onClick={(event)=>props.removeTask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>props.filteredTask('All')}>All</button>
                <button onClick={()=>props.filteredTask('Active')}>Active</button>
                <button onClick={()=>props.filteredTask('Completed')}>Completed</button>
            </div>
        </div>
    )
}

/*
const removeTask = (id: number) => {
    setTasks1(tasks1.filter((el) => el.id !== id))
}

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
}*/
