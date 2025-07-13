import React, {useRef} from 'react';

import "./RefLogin.css"

const RefLogin = () => {

    
       const emailRef=useRef();
       const passwordRef=useRef();
    
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log("Form Submitted !!!");
            
            
            console.log("Email : " , emailRef.current.value);
            console.log("Password : ", passwordRef.current.value);

            e.target.reset();
        }


  return (
    <div><h2>RefLogin</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
        <label htmlFor='email' className='form-label'>Email</label><br />
        <input id="email" type="email" name='email' ref={emailRef} />  
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