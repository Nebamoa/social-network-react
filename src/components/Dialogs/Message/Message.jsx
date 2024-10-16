import React from "react";
import d from "./../Dialogs.module.css";



const Message = (props) => {
  return (  <div className={d.messageItem}>
    <div className={d.message}>{props.message}</div>
    </div>)

};

export default Message;
