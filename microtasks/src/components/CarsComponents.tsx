import React from "react"

type CarsComponentsPropsType={
    cars:Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}

export const CarsComponents = (props:CarsComponentsPropsType) => {
    return (
        <table>
            <tr>
                <th>manufacturer</th>
                <th>Model</th>
            </tr>
            {props.cars.map((el, index)=>{
                return(
                    <tr key={index}>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}

        </table>

    )
}

