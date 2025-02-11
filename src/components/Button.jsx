import React, { useState } from 'react'

const Button = () => {

    const [toggle, isToggle] = useState('off')

    const handleToggle = () => {
        if(toggle === 'off'){
            isToggle('on')
        }else{
            isToggle('off')
        }
    }
    
  return (
    <>
    <button onClick={handleToggle}>{toggle}</button>    
    </>
  )
}

export default Button