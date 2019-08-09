import {
  UPDATE_USER_NAME,
  UPDATE_PASSWORD,
  POST_SIGN_IN,
  POST_SIGN_OUT,
  TOGGLE_SIGN_IN_FORM,
} from '../constants/AuthTypes.js'
import { takeEvery } from 'redux-saga/effects'

export const updateUserName = name => async dispatch => {
  dispatch({ type: UPDATE_USER_NAME, payload: name })
}

export const updatePassword = pw => async dispatch => {
  dispatch({ type: UPDATE_PASSWORD, payload: pw })
}

export const postSignOut = () => async dispatch => {
  dispatch({ type: POST_SIGN_OUT })
}

export const toggleSignInForm = () => async dispatch => {
  console.log('toggleSignInForm')
  dispatch({ type: TOGGLE_SIGN_IN_FORM })
}
