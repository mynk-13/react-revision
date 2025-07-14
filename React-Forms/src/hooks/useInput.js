import { useState } from "react"

export const useInput=(defaultValue, validationFn)=>{

    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setEdit]=useState(false);

    const valueIsValid=validationFn(enteredValue);

    const handleInputChange=(e)=>{
        setEnteredValue(e.target.value);
        setEdit(false);
    }

    const handleInputBlur=()=>{

        setEdit(true);
    }

    return({
        value:enteredValue,
        handleInputChange,
        handleInputBlur,
        setEnteredValue,
        hasError:didEdit && !valueIsValid
    })
} 