import { profileAPI } from "../api/api"
const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    posts: [
        { id: 1, post: "Привет, Мир!", likes: 30 },
        { id: 2, post: "Это мой первый пост!", likes: 100 },
        { id: 3, post: "Тут крч будут посты", likes: 322 },
      ],
      newPostText: "",
    profile: null,
    UserStatus: null, 
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_NEW_POST_TEXT: {
            return {
                ...state,
                posts: state.posts,
                newPostText: action.newText
            };
        }

        case ADD_POST: {
            let newPost = {
              id: state.posts.length ,
              post: state.newPostText,
              likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                UserStatus: action.status,
            }
        }
        default:
            return state;
    }
}

export default profileReducer
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = () => ({type: ADD_POST})
export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, newText: text})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (status) => {
    return (dispatch) => {
        profileAPI.getProfile(status)
        .then((response) => {
            dispatch(setUserProfile(response.data));
        });

    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setUserStatus(response.data))
        })
    }
} 

export const updateStatus = (status) => {

    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
    }
} 