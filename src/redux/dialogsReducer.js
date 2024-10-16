const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: "Kenobi", avatar: "https://media.distractify.com/brand-img/AfN5uaEVS/0x0/why-does-general-grievous-cough-1651778929320.jpg" },
    { id: 2, name: "Grievous", avatar: "https://www.liveabout.com/thmb/F5lfgFptU9DNTDCT-xNEtot0lQ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg" },
  ],
  messages: [
    { id: 1, message: "Hello there!" },
    { id: 2, message: "General Kenobi" },
  ],
  newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch(action.type) {
    case CHANGE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageBody: action.msgText,
      }
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, {id: 3, message: state.newMessageBody}],
        newMessageBody: '',
      };
    }
    default:
      return state;
  }
}

export const changeNewMesageTextActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, msgText: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export default dialogsReducer
