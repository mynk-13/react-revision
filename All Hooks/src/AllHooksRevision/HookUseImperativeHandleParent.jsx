import React, { useRef } from 'react'
import HookUseImperativeHandleChild from './HookUseImperativeHandleChild'

const HookUseImperativeHandleParent = () => {
   
    const parentRef=useRef();

  return (
    <div>
        <HookUseImperativeHandleChild ref={parentRef} />

        <button onClick={()=>parentRef.current.focus()}>Focus</button>
        <button onClick={()=>parentRef.current.clear()}>Clear</button>
    </div>
  )
}

export default HookUseImperativeHandleParent