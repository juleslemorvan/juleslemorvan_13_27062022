import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserInfo, logOut } from "../actions/userActions";
import logo from "../assets/images/argentBankLogo.png";
import { useNavigate } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";

const User = () => {
  const [updateForm, setUpdateForm] = useState(false);

  const toggleForm = () => {
    setUpdateForm(!updateForm);
  };

  const Navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = useSelector((state) => state.userInfos);

  useEffect(() => {
    dispatch(getUserInfo(userLogin?.userInfo?.body?.token));
  }, []);

  const handlLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    Navigate("/");
  };

  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="user-info-container">
          <Link className="main-nav-item" to="./user.html">
            <i className="fa fa-user-circle"></i>
            {userInfo?.userInfos?.body?.firstName}
          </Link>
          <Link className="main-nav-item" to="/">
            <button className="sign-out-button" onClick={handlLogOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userInfo?.userInfos?.body?.firstName}{" "}
            {userInfo?.userInfos?.body?.lastName}
          </h1>
          {updateForm ? (
            <UpdateForm />
          ) : (
            <button className="edit-button" onClick={toggleForm}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default User;
