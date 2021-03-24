import React, {useState} from 'react';
// import answers from './answers';
import './EightBall.css';


const EightBall = ({answers}) => {

    const genIdx = () => Math.floor(Math.random() * answers.length);

    const [idx, setIdx] = useState(0);
    let myColor = answers[idx].color;
    let myMsg = answers[idx].msg;


    return (
        <div className="EightBall" style={{backgroundColor: myColor}}
        onClick={() => setIdx(genIdx)}
        >
            <br></br>
            <br></br>
            <br></br>
            <h1 className='EightBall-question'>{myMsg}</h1>
        </div>
    )

}


export default EightBall;