import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";
import {Profile} from "./components/Profile";

const App=()=>{
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Profile/>
            <Footer/>
        </div>
    );
}


export default App;