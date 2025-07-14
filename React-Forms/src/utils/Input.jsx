import React from 'react'

const Input = ({label, id, error, ...props}) => {
  return (
     <div>
        <label>{label}</label>
        <input id={id} {...props} />
        <div>{error}</div>
    </div>
  )
}

export default Input