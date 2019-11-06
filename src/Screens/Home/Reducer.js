import { UPDATE_PROFILE, UPDATE_NAME, UPDATE_PHONE, UPDATE_EMAIL, UPDATE_IMAGE, CLEAR_ALL_DATA } from './Action';

const initialState = {
  name: '',
  phone: '',
  email: '',
  photo: null,
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PHONE: {
      return {
        ...state,
        phone: action.payload
      }
    }

    case UPDATE_NAME: {
      return {
        ...state,
        name: action.payload,
      }
    }

    case UPDATE_EMAIL: {
      return {
        ...state,
        email: action.payload
      }
    }

    case UPDATE_IMAGE:
      return {
        ...state,
        photo: action.payload
      }

    case UPDATE_PROFILE:
      return {
        profileData: action.payload
      }
    
    case CLEAR_ALL_DATA:
      return {
        name: '',
        phone: '',
        email: '',
        photo: null,
      }
  
    default:
        return state;
  }
}