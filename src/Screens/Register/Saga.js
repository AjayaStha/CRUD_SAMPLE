import { call, put } from 'redux-saga/effects';
import { get } from 'lodash';

import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from './Action';
import { Api } from '../../Constants';


export function* attemptToRegister(action) {
  yield put({type: REGISTER_LOADING})
  try {
    const response = yield call(Api.register, action.payload)
    yield put({type: REGISTER_SUCCESS, payload: response.token})   
  }
  catch(e){
    // console.warn('e',e )
    yield put({type: REGISTER_ERROR})
  }
}