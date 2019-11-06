export const ATTEMPT_TO_REGISTER = 'ATTEMPT_TO_REGISTER';
export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export function attemptToRegister(email,password) {
  return {
    type: ATTEMPT_TO_REGISTER,
    payload: [email, password]
  }
}