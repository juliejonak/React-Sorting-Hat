import React from 'react';
import hat from '../img/sorting_hat.png';


const Q1 = (props) => {
    return (
        <div className={props.q1 ? 'q1' : 'hidden'}>
            <img src={hat} className="logo" alt="sorting-hat" />
            <h1 className="Welcome App-title">Question 1</h1>
            <p>When faced with a busy week, how do you prepare?</p>

            <button className="answer-one" onClick={props.logHufflepuff} >
                Prepare? I just handle it as it happens.
            </button>
            <button className="answer-two" onClick={props.logRavenclaw} >
                I make a detailed schedule.
            </button>
            <button className="answer-three" onClick={props.logGryffindor} >
                I usually wait until last minute...but it all gets done.
            </button>
            <button className="answer-four" onClick={props.logSlytherin} >
                I'll delegate as much as I can.
            </button>
        </div>
    )
}

export default Q1;
