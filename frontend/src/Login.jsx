import React, { useState } from 'react'
import './Login.css';
import { Link } from "react-router-dom";
const Login = () => {
  const [login, setlogin] = useState({
    email: '',
    password: '',
  })
  const loginform = (e) => {
    e.preventDefault();
    fetch('http://localhost:7000/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login)
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Login Successful");
        localStorage.setItem("token",result.token)
        setlogin({ email: "", password: "" })
      })
 
  }
  return (
    <div className=' d-flex justify-content-center align-items-center min-vh-100 hii'>

      <div className='wow card p-4 shadow' style={{ width: "380px" }}>
        <div className='text-center mb-3'>
          <h5 className='text-white fw-bold'>Login</h5>
        </div>
        <form onSubmit={loginform}>
          <div className='mb-3 text-white fw-bold'>
            <label>Email</label>
            <input type='email' className='form-control' placeholder='Enter email address' value={login.email} onChange={(e) => setlogin({ ...login, email: e.target.value })} />
          </div>

          <div className='mb-2 text-white '>
            <div className='d-flex justify-content-between fw-bold'>
              <label>Password</label>
              <a href='/home' className='text-decoration-none text-info'>Forgot Password?</a>
            </div>
            <input type='password' className='form-control' placeholder='Enter your password' value={login.password} onChange={(e) => setlogin({ ...login, password: e.target.value })} />
          </div>
          <button className='btn btn-primary w-100 mt-3 fw-bold' type='submit'>
            LOG IN
          </button>
        </form>
        <p className='text-center mt-3 mb-0 text-white'>
          Don’t have an account?  <Link to="/signup" className='text-info'>
            Signup
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login