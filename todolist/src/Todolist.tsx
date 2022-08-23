import React, {useState} from "react";

type TodolistPropsType={
    title: string
    titleNew?: number
    tasks: Array<TaskType>
    removeTask:(id: number)=>void

}

export type TaskType={
    id: number
    title: string
    isDone: boolean
}

type FilteredType = "All"| "Completed" | "Active"



export const Todo =(props: TodolistPropsType)=>{



    const [filteredValue, setFilteredValue] = useState<FilteredType>('All')

    let filteredTasks = props.tasks
    if (filteredValue === 'Active') {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }
    if (filteredValue === 'Completed') {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }

    const filteredTask = (button: FilteredType) => {
        setFilteredValue(button)
        //console.log(button)
    }


    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredTasks.map((el,index)=>{
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
                <button onClick={()=>filteredTask('All')}>All</button>
                <button onClick={()=>filteredTask('Active')}>Active</button>
                <button onClick={()=>filteredTask('Completed')}>Completed</button>
            </div>
        </div>
    )
}