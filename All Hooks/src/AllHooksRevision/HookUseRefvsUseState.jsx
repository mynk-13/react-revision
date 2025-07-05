import React, { useEffect, useRef, useState } from 'react'

const HookUseRefvsUseState = () => {

    const[num, setNum]=useState(0);
    const countRef=useRef(0);
    //const [rendered, setRendered]=useState(0);
    const renderedRef=useRef(1);
    const incrementState=()=>{

        setNum(prev=>prev+1);
    }

    const incrementRef=()=>{

   
        countRef.current += 1;
        console.log(countRef.current);
    }

    useEffect(()=>{
        //setRendered(prev=>prev+1);

        renderedRef.current+=1;
    });

  return (
    <div>
        <h2>UseState vs UseRef</h2>

        <div>
            <div>
            <h3>UseState:</h3>
            <p>State Count: {num}</p>
            <button onClick={incrementState}>Increment State</button>
            </div>

            <div>
            <h3>UseRef:</h3>
            <p>Ref Count: {countRef.current}</p>
            <button onClick={incrementRef}>Incremet Ref</button>
            </div>

            <div>
                Rendered : {renderedRef.current} times  
            </div>
        </div>
    </div>
  )
}

export default HookUseRefvsUseState