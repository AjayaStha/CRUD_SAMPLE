import { takeLatest } from 'redux-saga/effects';

import {  ATTEMPT_TO_REGISTER, attemptToRegister, ATTEMPT_TO_LOGIN, attemptToLogin, } from '../Screens';


// WatcherSaga
function* rootSaga() {
  yield takeLatest(ATTEMPT_TO_LOGIN, attemptToLogin)
  yield takeLatest(ATTEMPT_TO_REGISTER, attemptToRegister)
}

export default rootSaga;
