import React, { useEffect, useLayoutEffect } from 'react'

const HookUseLayoutEffect = () => {

    useLayoutEffect(()=>{
        console.log("useLayoutEffect runs");

    },[]);

    useEffect(()=>{
        console.log("useEffect runs");
    })

  return (
    <div>HookUseLayoutEffect</div>
  )
}

export default HookUseLayoutEffect