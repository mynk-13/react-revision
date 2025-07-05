import React, {useState, useRef} from 'react'
import ThemeSwitcher from './ThemeSwitcher';

const HookUseContext = () => {


        const [inputValue, setInputValue]=useState("");
        const inputRef =useRef(null);
    
  return (
    <div>

        <ThemeSwitcher />
        <br />
        <input 
            type='text'
            value={inputValue}
            placeholder="Type something..."
            onChange={(e)=> setInputValue(e.target.value)}
            ref={inputRef} //reference to the input box
             />

        <div>
            Input Value : {inputValue}
        </div>
    </div>
  )
}

export default HookUseContext