import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../actions/userActions";

const UpdateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = useSelector((state) => state.userInfos);

  useEffect(() => {
    dispatch(getUserInfo(userLogin?.userInfo?.body?.token));
  }, []);

  return (
    <form className="updateUserInfosForm" action="">
      <div className="updateUserInfosContainer">
        <div className="firstNameContainer">
          <label htmlFor=""></label>
          <input
            className="firstName"
            value={firstName}
            type="text"
            placeholder={userInfo?.userInfos?.body?.firstName}
          />
        </div>
        <div className="lastNameContainer">
          <label htmlFor=""></label>
          <input
            className="lastName"
            value={lastName}
            type="text"
            placeholder={userInfo?.userInfos?.body?.lastName}
          />
        </div>
      </div>
      <button className="updateFormSubmit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UpdateForm;
