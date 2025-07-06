import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'

const HookUseImperativeHandleChild = ({ref}) => {

    const [inputValue, setInpValue]=useState("");
    const inputRef=useRef(null);

    useImperativeHandle(ref,()=>({

        focus: () => {
            inputRef.current.focus();
        },

        clear: () =>{
            inputRef.current.value="";
        },

    }));

    useEffect(()=>{
        console.log(inputRef.current);
    },[])

  return (
    <div>
        <input type="text"
                placeholder='Type something...'
                value={inputValue}
                onChange={(e)=>setInpValue(e.target.value)}
                ref={inputRef} 
                />
        <div>
            Value Entered :<strong> {inputValue}</strong>
        </div>
    </div>
  )
}

export default HookUseImperativeHandleChild