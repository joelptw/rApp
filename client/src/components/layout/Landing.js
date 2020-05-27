import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer connector</h1>
          <p className="lead">
            Create a developer profile/portfolio share posts and get help from
            other developer
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sing up
            </Link>
            <Link to="/login" className="btn btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
