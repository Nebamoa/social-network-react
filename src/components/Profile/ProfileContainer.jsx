import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus } from "../../redux/profileReducer";
import Preloader from "../common/preloader/preloader";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {

  const { profile, isAuth, getUserProfile, UserStatus, getUserStatus, updateStatus } = props;
  let { userId } = useParams();
  useEffect(() => {
    getUserProfile(userId);
    getUserStatus(userId);
  }, [userId]);
  return props.profile ? <Profile isAuth={isAuth} profile={profile} UserStatus={UserStatus} updateStatus={updateStatus}/> : <Preloader />;
};


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  UserStatus: state.profilePage.UserStatus,
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
  // withAuthRedirect
)(ProfileContainer)
