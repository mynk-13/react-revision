import React, { useState } from 'react';
import "./StateLoginCombined.css";
import Input from './utils/Input';


//Added Validation on lost focus-> Blur
const ResuableInputStateLogin = () => {

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

         setEnteredValues({
                email:"",
                password:""
            });

            setIsEdit({email:false,
                password:false});
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
            });

           setIsEdit({email:false,
                password:false});
    }

    const handleInputBlur=(identifier)=>{

        setIsEdit((prev)=>({...prev,[identifier]:true}));
            
        }
    

    const isEmailInvalid=isEdit.email && !enteredValues.email.includes('@');
    const isPasswordInvalid=isEdit.password && enteredValues.password.length<6

  return (
    <div>
        <form onSubmit={handleSubmit}>
         <h2>StateLoginCombined</h2>
        <div className='form-control'>
         {/* <label htmlFor='email' className='form-label'>Email</label><br />
        <input id="email" type="email" name='email' 
                value={enteredValues.email} 
                onChange={(e)=>handleInputChange("email", e.target.value)}
                onBlur={()=>{handleInputBlur('email')}} />   */}

         <Input label="email" 
                id="email" 
                name="email" 
                type="email" 
                value={enteredValues.email} 
                onChange={(e)=>handleInputChange("email",e.target.value)} 
                onBlur={()=>handleInputBlur('email')}
                required
                error={isEmailInvalid && <p>Pls enter a valid email</p>} />
        </div>
        <div className='form-control'>

            <Input label="password" 
                id="password" 
                name="password" 
                type="password" 
                value={enteredValues.password} 
                onChange={(e)=>handleInputChange("password",e.target.value)} 
                onBlur={()=>handleInputBlur('password')}
                minLength={6}
                required
                error={isPasswordInvalid && <p>Pls enter a valid password</p>} />
        </div>

        <div className='btn-container'>
        <button className='bt-form' type="button" onClick={handleReset}>Reset</button>
        <button className='btn-form' disabled={isEmailInvalid || isPasswordInvalid ?true:false}>Login</button>
        </div>

        </form>
           
    </div>
  )
}

export default ResuableInputStateLogin;