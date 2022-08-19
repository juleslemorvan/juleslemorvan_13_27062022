import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, updateUserInfos } from "../actions/userActions";

const UpdateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = useSelector((state) => state.userInfos);

  useEffect(() => {
    dispatch(getUserInfo(userLogin?.userInfo?.body?.token));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfos(firstName, lastName));
  };

  return (
    <form className="updateUserInfosForm" onSubmit={handleSubmit}>
      <div className="updateUserInfosContainer">
        <div className="firstNameContainer">
          <label htmlFor=""></label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="firstName"
            type="text"
            placeholder={userInfo?.userInfos?.body?.firstName}
          />
        </div>
        <div className="lastNameContainer">
          <label htmlFor=""></label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="lastName"
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
