export const ATTEMPT_TO_LOGIN = 'ATTEMPT_TO_LOGIN';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function attemptToLogin(email,password) {
  return {
    type: ATTEMPT_TO_LOGIN,
    payload: [email, password]
  }
}