import React from "react";

const UpdateForm = () => {
  return (
    <form className="updateUserInfosForm" action="">
      <div className="updateUserInfosContainer">
        <div className="firstNameContainer">
          <label htmlFor=""></label>
          <input
            className="firstName"
            type="text"
            placeholder="New FirstName ?"
          />
        </div>
        <div className="lastNameContainer">
          <label htmlFor=""></label>
          <input
            className="lastName"
            type="text"
            placeholder="New LastName ?"
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
