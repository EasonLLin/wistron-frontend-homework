import { SIGN_IN, SIGN_OUT } from '../constants/AuthTypes.js'

// export const updateUserName = name => dispatch => {
//   dispatch({ type: UPDATE_USER_NAME, payload: name })
// }

// export const updatePassword = pw => dispatch => {
//   dispatch({ type: UPDATE_PASSWORD, payload: pw })
// }

export const postSignOut = () => dispatch => {
  dispatch({ type: SIGN_OUT })
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
  return { type: SIGN_IN.REQUEST, payload: authParams }
}
