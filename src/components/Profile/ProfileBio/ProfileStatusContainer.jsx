import React, { Component, useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserStatus, updateStatus } from "../../../redux/profileReducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import ProfileStatus from "./ProfileStatus";
import { useParams } from "react-router-dom";

const ProfileStatusContainer = (props) => {
  
  const { UserStatus, updateStatus } = props;
  debugger
  const [state, setState] = useState({
    status: props.UserStatus,
    editMode: false,
  }); 

  return <ProfileStatus UserStatus={UserStatus} state={state} updateStatus={updateStatus} setState={setState} /> 
};



export default ProfileStatusContainer
