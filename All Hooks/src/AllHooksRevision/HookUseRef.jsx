import React, { useEffect, useRef, useState } from 'react'

const HookUseRef = () => {

    const [inputValue, setInputValue]=useState("");
    const inputRef =useRef(null);

    const countRef=useRef(null);

    const [num, setNum]=useState({
        count:0,
        id:"abcd"
    });

    const handleIncrement=()=>
    {
        setNum(prev=> {return{...prev, 
            count:prev.count+1
        }});
    }

     const handleDecrement=()=>
    {
        setNum(prev=> {return{...prev, 
            count:prev.count-1
        }});
    }


    console.log(inputRef);

    useEffect(()=>{
        console.log("inputRef",inputRef);

        inputRef.current && inputRef.current.focus();
    },[]);
  return (
    <div>

        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{num.count}</span> 
            <span  ref={countRef}>  {num.id} </span>
            <button onClick={handleIncrement}>+</button>
            <div>
            <button onClick={()=> countRef.current.innerHTML="XYZ"}>Change id to XYZ</button>
            </div>
        </div>
        <div><br/><br/>
        <input 
            type='text'
            value={inputValue}
            placeholder="Type something..."
            onChange={(e)=> setInputValue(e.target.value)}
            ref={inputRef} //reference to the input box
             />

        <div>
            Input Value : {inputValue}
        </div>
        </div>
    </div>
  )
}

export default HookUseRef