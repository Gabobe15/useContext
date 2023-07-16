import React, { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'

function Login() {
 const {setUserName, setShowProfile, setPassword} = useContext(LoginContext)
  return (
    <>
        <input
           type="text"
           placeholder='Username....'
           onChange={(e) => {setUserName(e.target.value)
            }}
           />
        <input 
            type="password"     
            placeholder='Password' 
            onChange={(e) => {setPassword(e.target.value)
            }}
            />
        <button onClick={() => setShowProfile(true)}>Login</button>

    </>
  )
}

export default Login
