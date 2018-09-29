import React from 'react';
import hat from '../img/sorting_hat.png';


const Page2 = (props) => {
    return (
        <div className={props.start ? 'sorting-hat' : 'hidden'}>
            <img src={hat} className="logo" alt="sorting-hat" />
            <h1 className="Welcome App-title">The Sorting Hat</h1>

            <p>
            Oh you may not think I'm pretty,<br></br>
            But don't judge on what you see,<br></br>
            I'll eat myself if you can find<br></br>
            A smarter hat than me.<br></br>
            </p>
            <p>
            You can keep your bowlers black,<br></br>
            Your top hats sleek and tall,<br></br>
            For I'm the Hogwarts Sorting Hat<br></br>
            And I can cap them all.<br></br>
            </p>
            <p>
            There's nothing hidden in your head<br></br>
            The Sorting Hat can't see,<br></br>
            So try me on and I will tell you<br></br>
            Where you ought to be.<br></br>
            </p>
            <p>
            You might belong in Gryffindor,<br></br>
            Where dwell the brave at heart,<br></br>
            Their daring, nerve, and chivalry<br></br>
            Set Gryffindors apart;<br></br>
            </p>
            <p>
            You might belong in Hufflepuff,<br></br>
            Where they are just and loyal,<br></br>
            Those patient Hufflepuffs are true<br></br>
            And unafraid of toil;<br></br>
            </p>
            <p>
            Or yet in wise old Ravenclaw,<br></br>
            if you've a ready mind,<br></br>
            Where those of wit and learning,<br></br>
            Will always find their kind;<br></br>
            </p>
            <p>
            Or perhaps in Slytherin<br></br>
            You'll make your real friends,<br></br>
            Those cunning folks use any means<br></br>
            To achieve their ends.<br></br>
            </p>
            <p>
            So put me on! Don't be afraid!<br></br>
            And don't get in a flap!<br></br>
            You're in safe hands (though I have none)<br></br>
            For I'm a Thinking Cap!<br></br>
            </p>

            <button className="sort-me" onClick={props.startQuiz} >
                Sort me!
            </button>
        </div>
    )
}

export default Page2;


