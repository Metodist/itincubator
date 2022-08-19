import React, {MouseEvent} from 'react';
import './App.css';

/*import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponents} from "./components/NewComponents";
import {CarsComponents} from "./components/CarsComponents";*/
import {Button} from "./components/Button";

/*type OnClickType = {
    name: string
}*/

/*
const onClickHandler = (name: string) => {
    return console.log(name)
}
*/


function App() {
    // const subscribe=(event:React.MouseEvent<HTMLButtonElement>)=>{
    //     return console.log('text')
    // }

   /* const foo1 = () =>{
       return console.log(100200)

    }

    const foo2 = (a: number) =>{
        return console.log(a);
    }
*/

    const ButtonFoo1=(s: string, age: number)=>{
        console.log(s, age)
    }

    const ButtonFoo2=(s: string)=>{
        console.log(s)

    }

    return (
        <>
            {/*<Header title={'Хедер'}/>
            <Body titleForBody={'Тело'}/>
            <Footer titleFooter={'Подвал'}/>
            <NewComponents students={students}/>
            <CarsComponents cars={topCars}/>
            <button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('vasya')}>MyYouTubeChannel -1</button>
            <button onClick={()=>onClickHandler('ivan')}>MyYouTubeChannel -2</button>*/}



            <Button name={'button 1'}  callBack={()=>ButtonFoo1('ivan', 21)}/>
            <Button name={'button 2'} callBack={()=>ButtonFoo2('Vasya')}/>
        </>
    );
}


export default App;

/*
const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]*/



