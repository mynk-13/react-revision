import React, { useState } from 'react';
import "./StateLoginCombined.css";

const StateLoginCombined = () => {

    const [enteredValues, setEnteredValues]=useState({
        email:"",
        password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted !!!");

        console.log("Email : " , enteredValues.email);
        console.log("Password : ", enteredValues.password);
    }

    const handleInputChange=(identifier, value)=>{

        setEnteredValues(prev => ({...prev, 
            [identifier]:value
        }))


    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
         <h2>StateLogin</h2>
        <div className='form-control'>
        <label htmlFor='email' className='form-label'>Email</label><br />
        <input id="email" type="email" name='email' value={enteredValues.email} onChange={(e)=>handleInputChange("email", e.target.value)} />  
        </div>

        <div className='form-control'>
        <label htmlFor='password' className='form-label'>Password</label><br />
        <input id="password" type="password" name='password' value={enteredValues.password} onChange={(e)=>handleInputChange("password",e.target.value)} />  
        </div>

        <div className='btn-container'>
        <button className='bt-form' type="reset">Reset</button>
        <button className='btn-form'>Login</button>
        </div>

        </form>
           
    </div>
  )
}

export default StateLoginCombined;