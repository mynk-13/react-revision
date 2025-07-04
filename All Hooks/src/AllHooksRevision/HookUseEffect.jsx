import React, { useEffect, useState } from "react";
    

const HookUseEffect = () => {

    
  
      const [num, setNum] = useState({
        count:0,
        id:"abcd"
      });

      const [screenWidth, setScreenWidth]=useState(window.innerWidth);
    
      const handleAdd = () => {
        
        // asyncronous, both the nums will be initialized with same num=0  -> React with batch multiple updates and take old value of num
        // setNum(num+1);  
        // setNum(num+1); 
        
        //synchronus way of handling the state
        setNum(prev=>{return {...prev, count:prev.count+1}});
       
      };
    
      const handleSubtract = () => {
        setNum(prev=>{return {...prev, count:prev.count-1}});
      };

      const handleResize=()=>{
        setScreenWidth(window.innerWidth);
      }
    
      //useEffect
      // case1- no Dependecy array ->
      // will run 1st time on mounting , then,  every time the component re-renders -> component re-renders of state change - num, screenWidth

      //case2- empty Dependency array ->
      //will run only for the 1st time, when the component mounts, then even if state changes, on re-renders - will not run

      //case3- [num]
      //will run during the 1st mount , and then -> every time num changes

      //before running the next time, first cleanup is done then the function inside useEffect runs
      useEffect(()=>{
        console.log("i ran");
        window.addEventListener("resize", handleResize);

        return ()=>{
            console.log("im done");
            window.removeEventListener("resize", handleResize);
        }
      },[num]);

    
  return (
    <div>
          <button onClick={handleSubtract}>-</button>
          <span> {num.count} </span>
          <span> {num.id} </span>
          <button onClick={handleAdd}>+</button>
          <p>{screenWidth}</p>
     </div>
  )
}

export default HookUseEffect