import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";
import {Content} from "./components/Content";

const App=()=>{
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Content/>
            <Footer/>
        </div>
    );
}


export default App;

