import {
  UPDATE_USER_NAME,
  UPDATE_PASSWORD,
  POST_SIGN_IN,
  POST_SIGN_OUT,
  TOGGLE_SIGN_IN_FORM,
} from '../constants/AuthTypes.js'

// export const updateUserName = name => dispatch => {
//   dispatch({ type: UPDATE_USER_NAME, payload: name })
// }

// export const updatePassword = pw => dispatch => {
//   dispatch({ type: UPDATE_PASSWORD, payload: pw })
// }

export const postSignOut = () => dispatch => {
  dispatch({ type: POST_SIGN_OUT })
}

// export const postSignIn = () => async dispatch => {
//   console.log('2')
//   dispatch({ type: POST_SIGN_IN.REQUEST })
// }

// export const toggleSignInForm = () => async dispatch => {
//   console.log('toggleSignInForm')
//   dispatch({ type: TOGGLE_SIGN_IN_FORM })
// }

export function postSignIn(authParams) {
  console.log('postSignIn')
  return { type: POST_SIGN_IN.REQUEST, payload: authParams }
}
