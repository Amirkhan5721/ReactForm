import React, { useState } from 'react'
import './FormInput.css'

const formInput = (props) => {

  const [focused, setFocused] = useState(false);
  const  {label, id,errorMessage, onChange, ...inputProps } = props; 

  const handleFocus = () => {
    setFocused(true);
  }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus= {() => inputProps.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()} />
        <span>{errorMessage}</span>
    </div>
  )
}

export default formInput
