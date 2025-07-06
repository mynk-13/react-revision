import React, { useId } from 'react'

const HookUseId = () => {

   const uniqueId=useId();
  return (
    <div>
        <input type='checkbox'  id={uniqueId} />
        <label htmlFor={uniqueId}>Accept Terms</label>
    </div>
  )
}

export default HookUseId