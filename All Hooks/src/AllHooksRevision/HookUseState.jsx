import React, { useState } from "react";

const HookUseState = () => {
  const [num, setNum] = useState(0);

  const handleAdd = () => {
    
    // asyncronous, both the nums will be initialized with same num=0 
    // setNum(num+1);  
    // setNum(num+1); 
    
    //synchronus way of handling the state
    setNum(prev=>prev + 1);
    setNum(prev=>prev + 1);
   
  };

  const handleSubtract = () => {
    setNum(prev=>prev - 1);
  };

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span> {num} </span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default HookUseState;
