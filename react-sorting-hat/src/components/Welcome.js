import React from 'react';
import logo from '../img/Hogwartscrest.png';


const Welcome = () => {
    return (
        <div className="Welcome">
            <img src={logo} className="logo" alt="hogwarts" />
            <h1 className="App-title">Welcome to Hogwarts</h1>
            <button className="enter-school">
                Enter the Great Hall
            </button>
        </div>
    )
}

export default Welcome;
