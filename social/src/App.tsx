import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"Заголовок"}/>
            <Rating value={5}/>
            <Accordion title={"менюшка"} collapsed={true}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

type PageTitlePropsType = {
    title: string
}

export default App;



