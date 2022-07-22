import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/argentBankLogo.png"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const SignIn = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  console.log(userLogin.isLoading);

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const handleLogin = (e) => {
  e.preventDefault()
  dispatch(login (email, password));
}

  return (
    <div className='sign-in-container'>
         <nav className="main-nav">
            <a className="main-nav-logo" href="/">
         <img
             className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"/>
         <h1 className="sr-only">Argent Bank</h1>
            </a>
     <div>
        <Link to="/sign-in">
            <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
              Sign In
            </a>
        </Link>
      </div>
    </nav>
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
          {userLogin.isLoading ? <p>loading</p> : <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input value={email} onChange= { e => setEmail(e.target.value)} type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label
            ><input value={password} onChange= { e => setPassword(e.target.value)} type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me"
              >Remember me</label>
          </div>

        <button onClick={handleLogin} className="sign-in-button">Sign In</button> 
        </form> }
        
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    </div>
  )
}

export default SignIn