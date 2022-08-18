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
           {props.students.map((el, index)=>{
               debugger
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

/*
<table>
    <tr>
        <th>Month</th>
        <th>Savings</th>
    </tr>
    <tr>
        <td>January</td>
        <td>$100</td>
    </tr>
    <tr>
        <td>February</td>
        <td>$80</td>
    </tr>
</table>*/
