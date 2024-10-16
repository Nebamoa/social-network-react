import react from "react"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    data: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return { 
                ...state,
                data: action.data,
                isAuth: true,
            }
        
        default:
            return state;
    }
}
export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const getUserData = () => {
    return (dispatch) => {
    authAPI.me()
      .then((response) => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          
          dispatch(setUserData(id, email, login));
        }
      });
    }
}
export default authReducer