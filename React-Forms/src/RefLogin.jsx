import React, {useRef, useState} from 'react';

import "./RefLogin.css"

const RefLogin = () => {

    
       const emailRef=useRef();
       const passwordRef=useRef();

       const [isEmailInvalid, setIsEmailInvalid]=useState(false);
    
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log("Form Submitted !!!");
            
            
          

            const emailEntered=emailRef.current.value;
            const passwordEntered=passwordRef.current.value;

             console.log("Email : " , emailEntered);
            console.log("Password : ",passwordEntered);

            if(!emailEntered.includes('@'))
            {setIsEmailInvalid(true);
                return;
            }

            setIsEmailInvalid(false);

            e.target.reset();
        }


  return (
    <div><h2>RefLogin</h2>
      <form noValidate='no-validate' onSubmit={handleSubmit}>
        <div className='form-control'>
        <label htmlFor='email' className='form-label'>Email</label><br />
        <input id="email" type="email" name='email' ref={emailRef} />  
        <div>{isEmailInvalid && <p>Pls enter a valid email</p>}</div>
        </div>

        <div className='form-control'>
        <label htmlFor='password' className='form-label'>Password</label><br />
        <input id="password" type="password" name='password' ref={passwordRef} />  
        </div>

        <div className='btn-container'>
        <button className='bt-form' type="reset">Reset</button>
        <button className='btn-form'>Login</button>
        </div>

        </form>
    </div>
  )
}

export default RefLogin