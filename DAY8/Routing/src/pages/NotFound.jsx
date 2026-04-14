import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-text">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="home-btn">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;