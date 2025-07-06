import React, { useReducer } from 'react'


const initialCart=[];

function cartReducer(state, action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state, {...action.payload, quantity :1}];
        
        case "REMOVE_ITEM":
            return state.filter((item)=>item.id!== action.payload.id);
        
        case "CLEAR_CART":
            return [];
        
        default:
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}
const HookUseReducerCart = () => {

    const [cart, dispatch]=useReducer(cartReducer, initialCart);

    const handleAdd=(item)=>{
        dispatch({type:"ADD_ITEM", payload: item});
    }

    const handleRemove=(item)=>{
        dispatch({type:"REMOVE_ITEM", payload: item});
    }

    const handleClearCart=()=>{
        dispatch({type: "CLEAR_CART"});
    }

    const totalPrice=cart.reduce((total, item)=>total+item.price*item.quantity, 0);
  return (
    <div>
        <h2>Shopping cart</h2>
        <ul>
            {cart.map((item)=>(
                <li key={item.id}>
                    <span>{item.name} - ${item.price}</span> 
                    <span>  Quantity: {item.quantity}  </span>
                    <button onClick={()=>handleRemove(item)}>Remove</button>
                </li>
            ))}
        </ul>
        <h3>Total : ${totalPrice}</h3>
        <button onClick={()=>
            handleAdd({id:Date.now(), name:"New Item", price:10})
        }>Add Item</button>
        <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}

export default HookUseReducerCart