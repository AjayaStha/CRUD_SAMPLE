export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_PHONE = 'UPDATE_PHONE';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const CLEAR_ALL_DATA = 'CLEAR_ALL_DATA';

export function updateName(payload) {
  return {
    type: UPDATE_NAME,
    payload,
  }
}

export function updatePhone(payload) {
  return {
    type: UPDATE_PHONE,
    payload
  }
}

export function updateEmail(payload) {
  return {
    type: UPDATE_EMAIL,
    payload
  }
}

export function updateImage(payload) {
  return {
    type: UPDATE_IMAGE,
    payload,
  }
}

export function clearData(){
  return {
    type: CLEAR_ALL_DATA,
  }
}