import React from "react";
import m from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileBio from "./ProfileBio/ProfileBio";
import store from './../../redux/redux-store';
import { Navigate, useParams } from "react-router-dom";

const Profile = (props) => {
  return (
    <div className="app-wrapper-content">
      <ProfileBio profile={props.profile} UserStatus={props.UserStatus} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
