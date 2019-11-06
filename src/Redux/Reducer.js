import { combineReducers } from 'redux';

import { profileReducer, loginReducer, registerReducer } from '../Screens';

const rootReducer = combineReducers({
  blank: (state = null) => state,
  login: loginReducer,
  register: registerReducer,
  profile: profileReducer,
  
});

export default (rootReducer);
