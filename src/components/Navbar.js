import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/argentBankLogo.png";
import { logOut } from "../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfos);

  const Navigate = useNavigate();

  const handlLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    Navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {userInfo?.userInfos?.body?.firstName ? (
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
      ) : (
        <div>
          <Link to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
