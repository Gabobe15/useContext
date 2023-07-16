import React,{useContext} from 'react'
import { LoginContext } from '../contexts/LoginContext'
 
function Profile() {
    const {username, password} = useContext(LoginContext)
  return (
    <>
      <h1>Profile</h1>
      <h2>Username: {username}</h2>
      <h2>Password: {password}</h2>
    </>
  )
}

export default Profile
