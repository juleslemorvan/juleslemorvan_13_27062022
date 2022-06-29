import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/argentBankLogo.png"
import chatIcon from "../assets/images/icon-chat.png"
import moneyIcon from '../assets/images/icon-money.png'
import securityIcon from "../assets/images/icon-security.png"

const Home = () => {
  return (
    <div>
         <nav class="main-nav">
           
      <a class="main-nav-logo" href="/">
        <img
          class="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      
      <div>
         <Link to="/sign-in">
        <a class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
        </Link>
      </div>
    </nav>
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>
        <div class="feature-item">
          <img
            src={chatIcon}
            alt="Chat Icon"
            class="feature-icon"
          />
          <h3 class="feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div class="feature-item">
          <img
            src={moneyIcon}
            alt="Chat Icon"
            class="feature-icon"
          />
          <h3 class="feature-item-title">More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div class="feature-item">
          <img
            src={securityIcon}
            alt="Chat Icon"
            class="feature-icon"
          />
          <h3 class="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p class="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    </div>
  )
}

export default Home