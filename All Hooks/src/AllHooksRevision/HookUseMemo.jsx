import React, { useEffect, useState , useMemo } from 'react'

const HookUseMemo = () => {

    const [num, setNum]=useState({
        count:0,
        id:"abcd",
    });

    const [show, setShow]=useState(false);

    const handleDecrement=()=>{
         setNum((prev)=>{return{...prev, count:prev.count-1}});
    }

    const handleIncrement=()=>{
        setNum((prev)=>{return{...prev, count:prev.count+1}});
    }

    useEffect(()=>{
        console.log("component rendered");
    },[num]);

    const handleChange=useMemo(()=>{

        console.log("handleChange called");

        for(let i=0; i<1000000000;i++){}

        return num.count*2;
    },[num]);

  return (
    <div>

        <h2>Num : {num.count}</h2>
        {show && <span>Id : {num.id}</span>}
        <br /><br />
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <h3>{handleChange}</h3>
        <button onClick={()=>setShow(prev=>!prev)}>{show? "Hide ID": "Show ID"}</button>
    </div>
  )
}

export default HookUseMemo