import React from 'react';
import logo from '../img/Hogwartscrest.png';


const Welcome = (props) => {
    return (
        <div className={props.show ? 'hidden' : ''}>
            <img src={logo} className="logo" alt="hogwarts" />
            <h1 className="Welcome App-title">Welcome to Hogwarts</h1>
            <button className="enter-school" onClick={props.enterClick} >
                Enter the Great Hall
            </button>
        </div>
    )
}

export default Welcome;
