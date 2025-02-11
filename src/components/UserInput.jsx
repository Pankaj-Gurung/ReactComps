import React, { useState } from 'react'

const UserInput = () => {
    
    const [userName, setUserName] = useState('')

    const handleuserName = (event) => {
        setUserName(event.target.value)
    }

const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Welcome ${userName}`)
    setUserName('')
}

  return (
    <>
   <input type="text" placeholder='Name' onChange={handleuserName} value={userName}  />
    <button type='submit' onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default UserInput