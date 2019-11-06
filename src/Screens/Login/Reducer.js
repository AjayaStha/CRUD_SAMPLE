import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from './Action';

const initialState = { 
  loginToken: '',
  loginLoading: false,
  loginError: false,
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true,
        loginError: false,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginToken: action.payload,
        loginError: false,
      }

    case LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginError: true,
      }
    
    default:
    return state;
  }
}