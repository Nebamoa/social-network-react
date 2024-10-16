import React from "react";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";



const Dialogs = (props) => {
  let state = props.dialogsPage
  let dialogsElements = state.dialogs.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
  let messagesElements = state.messages.map ((message) => <Message message={message.message}/>)
  console.log(props)
  let textMessageSend = () => {
    props.textMessageSend()
  }
  let textMessageChange = (e) => {
    let body = e.target.value
    props.onTextMessageChange(body)
  }



  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        { dialogsElements }
      </div>
      
      <div className={d.messages}>
        <div>{ messagesElements }</div>
      </div>
      <div className={d.send}>
        <div>
          <textarea value={state.newMessageBody} placeholder="Введите сообщение" className={d.textarea} onChange={ textMessageChange } id="" cols="30" rows="10" />
        <button className={d.sendMessage} onClick={textMessageSend}>Отправить</button></div>
      </div>
    </div>
    
  );
};

export default Dialogs;
