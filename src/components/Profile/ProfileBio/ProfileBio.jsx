import React from "react";
import m from "./ProfileBio.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusContainer from "./ProfileStatusContainer";
const ProfileBio = (props) => {
  let work = () => {
    if (props.profile.lookingForAJob) return <span>Ищу работу</span>;
    else return <span>Не ищу</span>;
  };

  return (
    <div>
      <div>
        <img
          className={m.banner}
          src="https://avatars.dzeninfra.ru/get-zen_doc/8866523/pub_644305b10ae8f9044c00fcda_644305f54f7f264a5adf9de8/scale_1200"
          alt="banner"
        />
      </div>
      <div className={m.bio}>
        <img
          className={m.avatar}
          src={props.profile.photos.large}
          alt="avatar"
        />
        {props.profile.fullName}
        <div><ProfileStatusContainer updateStatus={props.updateStatus} UserStatus={props.UserStatus}/></div>
        
        <div>
          <span>Поиск работы: </span>
          <span>{work()}</span>
        </div>
        <div>
          <span>Примечание: </span>
          <span>{props.profile.lookingForAJobDescription}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBio;
