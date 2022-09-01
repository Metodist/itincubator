import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";

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