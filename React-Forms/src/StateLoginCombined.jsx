import React, { useState } from 'react';
import "./StateLoginCombined.css";


//Added Validation on lost focus-> Blur
const StateLoginCombined = () => {

    const [enteredValues, setEnteredValues]=useState({
        email:"",
        password:""
    });

    const[isEdit,setIsEdit]=useState({
        email:false,
        password:false,
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted !!!");

        console.log("Email : " , enteredValues.email);
        console.log("Password : ", enteredValues.password);

        e.target.reset();
    }

    const handleInputChange=(identifier, value)=>{

        setEnteredValues(prev => ({...prev, 
            [identifier]:value
        }))

        setIsEdit((prev)=>({...prev,[identifier]:false}));


    }

    const handleReset=()=>{

            setEnteredValues({
                email:"",
                password:""
            })
    }

    const handleInputBlur=(identifier)=>{

        setIsEdit((prev)=>({...prev,[identifier]:true}));
            
        }
    

    const isEmailInvalid=isEdit.email && !enteredValues.email.includes('@');

  return (
    <div>
        <form onSubmit={handleSubmit}>
         <h2>StateLoginCombined</h2>
        <div className='form-control'>
        <label htmlFor='email' className='form-label'>Email</label><br />
        <input id="email" type="email" name='email' 
                value={enteredValues.email} 
                onChange={(e)=>handleInputChange("email", e.target.value)}
                onBlur={()=>{handleInputBlur('email')}} />  
       
        </div>
         <div>{isEmailInvalid && <p>Pls enter a valid email</p>}</div>
        <div className='form-control'>
        <label htmlFor='password' className='form-label'>Password</label><br />
        <input id="password" type="password" name='password' value={enteredValues.password} onChange={(e)=>handleInputChange("password",e.target.value)} 
            onBlur={()=>{handleInputBlur('password')}} />  
        </div>

        <div className='btn-container'>
        <button className='bt-form' type="button" onClick={handleReset}>Reset</button>
        <button className='btn-form' disabled={isEmailInvalid?true:false}>Login</button>
        </div>

        </form>
           
    </div>
  )
}

export default StateLoginCombined;