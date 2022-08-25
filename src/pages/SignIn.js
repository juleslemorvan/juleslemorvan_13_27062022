import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const navigate = useNavigate();

  useEffect(() => {
    if (userLogin?.userInfo?.body?.token) {
      navigate("/account");
    }
  }, [userLogin, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="sign-in-container">
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {userLogin?.error && (
            <p className="error-message">{userLogin?.error?.message}</p>
          )}
          {userLogin?.isLoading ? (
            <Spinner />
          ) : (
            <form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="username"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>

              <button onClick={handleLogin} className="sign-in-button">
                Sign In
              </button>
            </form>
          )}
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default SignIn;
