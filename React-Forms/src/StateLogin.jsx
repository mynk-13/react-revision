import React, { useState } from 'react';
import "./StateLogin.css";

const StateLogin = () => {

    const [emailValue, setEmailValue]=useState("");
    const [passwordValue, setPasswordValue]=useState("");

    const emailIsInvalid= emailValue!=="" && !emailValue.includes('@');



    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted !!!");

        console.log("Email : " , emailValue);
        console.log("Password : ", passwordValue);

        e.target.reset();
    }

    const handleReset=()=>{
        
        setEmailValue("");
        setPasswordValue("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
         <h2>StateLogin</h2>
        <div className='form-control'>
        <label htmlFor='email' className='form-label'>Email</label><br />
        <input id="email" type="email" name='email' value={emailValue} onChange={(e)=> setEmailValue(e.target.value)} />  
        <div>{emailIsInvalid && <p>Pls enter a valid email</p>}</div>
        </div>

        <div className='form-control'>
        <label htmlFor='password' className='form-label'>Password</label><br />
        <input id="password" type="password" name='password' value={passwordValue} onChange={(e)=> setPasswordValue(e.target.value)} />  
        </div>

        <div className='btn-container'>
        <button className='bt-form' type='button' onClick={handleReset}>Reset</button>
        <button className='btn-form' type="submit">Login</button>
        </div>

        </form>
           
    </div>
  )
}

export default StateLogin