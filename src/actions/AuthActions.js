import {
  UPDATE_USER_NAME,
  UPDATE_PASSWORD,
  POST_SIGN_IN,
  POST_SIGN_OUT,
} from '../constants/AuthTypes.js'

export const updateUserName = name => async dispatch => {
  dispatch({ type: UPDATE_USER_NAME, payload: name })
}

export const updatePassword = pw => async dispatch => {
  dispatch({ type: UPDATE_PASSWORD, payload: pw })
}

export const postSignIn = () => async dispatch => {
  dispatch({ type: POST_SIGN_IN.REQUEST })
  dispatch({ type: POST_SIGN_IN.SUCCESS })
}

export const postSignOut = () => async dispatch => {
  dispatch({ type: POST_SIGN_OUT })
}
