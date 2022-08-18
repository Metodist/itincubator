import React from "react";

type NewComponentsPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponents = (props: NewComponentsPropsType) => {
    return (
       <ul>
           {props.students.map((el)=>{
                return(
                    <li key={el.id}>
                        <span>{el.name}</span>
                        <span> age: {el.age}</span>
                    </li>
                )

           })}
       </ul>
    )
}

