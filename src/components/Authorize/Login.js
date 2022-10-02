import React from 'react'
import './Login.css'
const Login = (props) => {
  return (
    <>
    <div className="login-box">
      <h1>Login</h1>
      <form>
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

export default Login