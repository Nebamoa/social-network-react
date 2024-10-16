import React from "react";
import Dialogs from "./Dialogs";
import { changeNewMesageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import store from "../../redux/redux-store";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) =>{
  return {
    dialogsPage: store.getState().dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    textMessageSend: () => {dispatch(sendMessageActionCreator())},
    onTextMessageChange: (body) => {dispatch(changeNewMesageTextActionCreator(body))},
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);