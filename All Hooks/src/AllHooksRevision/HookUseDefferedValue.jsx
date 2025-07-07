import React, {useState, useDeferredValue } from 'react'

const HookUseDefferedValue = () => {
  const [input, setInput]=useState("");
     
   const defferedInput= useDeferredValue(input);
 
 
     //making our app slow
     const runExpensiveCalculation =(value) => {
         const calculatedResults =[];
 
         for(let index=0; index<999999999; index++) {}
 
         //Simulate heavy work by running many calculations  ---> can be API call which takes time
         for(let i=0;i<20000;i++){
             const result= i* parseInt(value || "0" , 10);
 
             if(i % 1000 === 0)
             calculatedResults.push(result);
         }
 
         return calculatedResults;
     }

     const results=runExpensiveCalculation(defferedInput);
 
     const handleInputChange=(e)=>{
 
         const newValue=e.target.value;
         setInput(newValue);
 
        
             

         
     }
 
 
   return (
     <div>
         <h2>useTransition Demo</h2>
 
         <div>
             <label>Enter a number : 
                 <input 
                     type="number"
                     value={input}
                     onChange={handleInputChange}
                      />
             </label>
 
            <div>
                 <h3>Results : </h3>
                 <ul>
                     {results.map((result, index)=>(
                         <li key={index+1}>
                             {index * 1000} x {input} = {result}
                         </li>
                     ))}
                 </ul>
             </div>
         </div>
     </div>
   )
 }


export default HookUseDefferedValue