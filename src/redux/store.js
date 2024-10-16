import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"




let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Kenobi", avatar: "https://media.distractify.com/brand-img/AfN5uaEVS/0x0/why-does-general-grievous-cough-1651778929320.jpg" },
        { id: 2, name: "Grievous", avatar: "https://www.liveabout.com/thmb/F5lfgFptU9DNTDCT-xNEtot0lQ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg" },
      ],
      messages: [
        { id: 1, message: "Hello there!" },
        { id: 2, message: "General Kenobi" },
      ],
      newMessageBody: ""
    },
    profilePage: {
      posts: [
        { id: 1, post: "Привет, Мир!", likes: 30 },
        { id: 2, post: "Это мой первый пост!", likes: 100 },
        { id: 3, post: "Тут крч будут посты", likes: 322 },
      ],
      newPostText: ""
    },
    sidebar: {

    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('Changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) { //type: ''
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
    
  }
}





export default store;
window.state = store;