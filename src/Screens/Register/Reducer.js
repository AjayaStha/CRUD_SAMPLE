import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from './Action';

const initialState = { 
  registerToken: '',
  registerLoading: false,
  registerError: false,
}

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        registerLoading: true,
        registerError: false,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        registerToken: action.payload,
        registerError: false,
      }

    case REGISTER_ERROR:
      return {
        ...state,
        registerLoading: false,
        registerError: true,
      }
    
    default:
    return state;
  }
}