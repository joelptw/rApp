import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spiner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import firebase from "firebase";
import config from "../../utils/firebase-init";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const messaging = firebase.messaging();

  messaging
    .requestPermission()
    .then(function() {
      console.log("tiene permiso");
      return messaging.getToken();
    })
    .then(function(token) {
      console.log(token);
    })
    .catch(function(err) {
      console.log(err);
    });

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {" "}
      <h1 className="large text-primary"> Dashboard </h1>{" "}
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}{" "}
      </p>
      {profile !== null ? (
        <Fragment>
          {" "}
          <DashboardActions />{" "}
          <Experience experience={profile.experience}></Experience>
          <Education education={profile.education}></Education>
          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus"> Delete My Account </i>
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <p>You have not yet setup a profile, please add some info</p>{" "}
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile{" "}
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
