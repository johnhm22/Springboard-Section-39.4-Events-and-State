import React, {useState} from 'react';
import './EightBall.css';


const EightBall = ({answers}) => {

    function genIdx(){
        let idx = 0;
        while (idx === 0) {
           idx = Math.floor(Math.random() * answers.length)
            }
        return idx;    
        }

    const [idx, setIdx] = useState(0);
    let myColor = answers[idx].color;
    let myMsg = answers[idx].msg;


    return (
        <div className="EightBall" style={{backgroundColor: myColor}}
        onClick={() => setIdx(genIdx)}
        >
            <h1 className='EightBall-question'>{myMsg}</h1>
        </div>
    )

}


export default EightBall;