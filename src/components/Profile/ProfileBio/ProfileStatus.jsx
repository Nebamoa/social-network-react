import React, { Component } from "react";
import { useState } from "react";

const ProfileStatus = (props) => {

    const activateEditMode = () => {
        let newEditMode = !props.state.editMode;
        props.setState({
          status: props.UserStatus,
          editMode: newEditMode
        });
      }
      const deativateEditMode = (el) => {
        let newEditMode = !props.state.editMode;
        props.setState({
          status: props.state.status,
          editMode: newEditMode
        });
        props.updateStatus(el.target.value)
      }
      const onStatusChange = (el) => {
        props.setState({ 
          status: el.target.value,
          editMode: props.state.editMode,
        })
      }
  return (
    <>
      <div>
        {!props.state.editMode && (
          <div>
            <span onDoubleClick={ activateEditMode }>{props.UserStatus || '-----'}</span>
          </div>
        )}
      </div>
      <div>
        {props.state.editMode && (
          <div>
            <input autoFocus={true} onChange={onStatusChange} onBlur={ deativateEditMode } value={props.state.status}></input>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileStatus;
