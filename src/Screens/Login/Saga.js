import { call, put } from 'redux-saga/effects';
import { get } from 'lodash';

import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from './Action';
import { Api } from '../../Constants';


export function* attemptToLogin(action) {
  yield put({type: LOGIN_LOADING})
  try {
    const response = yield call(Api.login, action.payload)
    yield put({type: LOGIN_SUCCESS, payload: response.token})   
  }
  catch(e){
    yield put({type: LOGIN_ERROR})
  }
}