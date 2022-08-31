import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container">
      <div className="error">Error</div>
      <div className="notFound">Page not found</div>
      <Link to="./" className="link-home">
        {" "}
        Return to the Home page
      </Link>
    </div>
  );
};

export default NotFound;
