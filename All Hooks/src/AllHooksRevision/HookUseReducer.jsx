import React, {  useReducer} from 'react'


const initialState=0;
const countReducer=(state, action)=>{

    switch(action.type){
        case "INCREMENT" : return state+ action.value;
        case "DECREMENT" : return state - 1;
        case "RESET" : return 0;
        default: return state;
    }
    
}

const HookUseReducer = () => {

    //const [count, setCount]=useState(0);

    const [count, dispatch]=useReducer(countReducer, initialState);

  return (
    <div>
        <h2>Count: {count}</h2>
        {/* <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(0)}>Reset</button> */}
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"INCREMENT", value:5})}>+ by 5 </button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default HookUseReducer