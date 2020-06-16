import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spiner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";
import Autocomplete from "../layout/Search";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  const [skill, setSkillValue] = useState("");
  console.log(skill);
  useEffect(() => {
    getProfiles(skill);
  }, [skill, getProfiles]);

  return (
    <Fragment>
      <Autocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      ></Autocomplete>

      <input
        type="text"
        placeholder="Search by skill..."
        value={skill}
        onChange={e => {
          setSkillValue(e.target.value);
        }}
      ></input>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile}></ProfileItem>
              ))
            ) : (
              <h4> No profiles found... </h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToPros = state => ({
  profile: state.profile
});

export default connect(mapStateToPros, { getProfiles })(Profiles);

{
  /*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.15.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.15.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
*/
}