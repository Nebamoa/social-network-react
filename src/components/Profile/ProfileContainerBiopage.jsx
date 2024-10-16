import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus } from "../../redux/profileReducer";
import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Navigate } from 'react-router-dom';

const ProfileContainer = (props) => {
  return <Navigate to="/profile/31712" />
}


export default ProfileContainer

