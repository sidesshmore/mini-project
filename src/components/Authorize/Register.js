import React from 'react'
import './Login.css'
const Register = () => {
  return (
    <>
   <div className="signup-box">
      <h1>Sign Up</h1>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="" />
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
      </form>
    </div>
    
    </>
  )
}

export default Register