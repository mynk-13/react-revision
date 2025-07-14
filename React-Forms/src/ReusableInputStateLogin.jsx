import React, { useState } from 'react';
import "./StateLoginCombined.css";
import Input from './utils/Input';
import { hasMinLength, isEmail, isNotEmpty } from './utils/validation';
import { useInput } from './hooks/useInput';


//Added Validation on lost focus-> Blur
const ResuableInputStateLogin = () => {

    const { value:emailValue,
            handleInputChange:handleEmailChange,
            handleInputBlur:handleEmailBlur,
            setEnteredValue:setEmailValue,
            hasError:hasEmailError
    } = useInput("", (value)=>{return isEmail(value) && isNotEmpty(value)});


    const { value:passwordValue,
            handleInputChange:handlePasswordChange,
            handleInputBlur:handlePasswordBlur,
            setEnteredValue:setPasswordValue,
            hasError:hasPasswordError
    } =useInput("", (value)=> hasMinLength(value, 6) && isNotEmpty(value));


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted !!!");

        // console.log("Email : " , enteredValues.email);
        // console.log("Password : ", enteredValues.password);

        

        if(hasEmailError || hasPasswordError)
            return;


        console.log("Email : ", emailValue);
        console.log("Password : " , passwordValue);

        
        setEmailValue("");
        setPasswordValue("");

    }

    // const handleInputChange=(identifier, value)=>{

    //     setEnteredValues(prev => ({...prev, 
    //         [identifier]:value
    //     }))

    //     setIsEdit((prev)=>({...prev,[identifier]:false}));


    // }

    const handleReset=()=>{

        //     setEnteredValues({
        //         email:"",
        //         password:""
        //     });

        //    setIsEdit({email:false,
        //         password:false});

        setPasswordValue("");
        setEmailValue("");


    }

    // const handleInputBlur=(identifier)=>{

    //     setIsEdit((prev)=>({...prev,[identifier]:true}));
            
    //     }
    

    // const isEmailInvalid=isEdit.email && !isEmail(enteredValues.email) && isNotEmpty(enteredValues.email);
    // const isPasswordInvalid=isEdit.password && !hasMinLength(enteredValues.password,6) && isNotEmpty(enteredValues.password);

  return (
    <div>
        <form noValidate='no-validate' onSubmit={handleSubmit}>
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
                value={emailValue} 
                onChange={handleEmailChange} 
                onBlur={handleEmailBlur}
                required
                error={hasEmailError && <p>Pls enter a valid email</p>} />
        </div>
        <div className='form-control'>

            <Input label="password" 
                id="password" 
                name="password" 
                type="password" 
                value={passwordValue} 
                onChange={handlePasswordChange} 
                onBlur={handlePasswordBlur}
                required
                error={hasPasswordError && <p>Pls enter a valid password</p>} />
        </div>

        <div className='btn-container'>
        <button className='bt-form' type="reset" onClick={handleReset}>Reset</button>
        <button className='btn-form' disabled={hasEmailError || hasPasswordError ?true:false}>Login</button>
        </div>

        </form>
           
    </div>
  )
}

export default ResuableInputStateLogin;