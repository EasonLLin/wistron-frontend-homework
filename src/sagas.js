import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import {
  UPDATE_USER_NAME,
  UPDATE_PASSWORD,
  POST_SIGN_IN,
  POST_SIGN_OUT,
  TOGGLE_SIGN_IN_FORM,
} from './constants/AuthTypes.js'

export default function* rootSaga() {
  yield all[watchRequestLogin()]
}

export function* watchRequestLogin() {
  console.log('saga woohoo')
  yield takeEvery(POST_SIGN_IN.REQUEST, loginFlow)
}

export function* loginFlow(action) {
  console.log('loginFlow')
  try {
    // const response = yield call(loginAPI, {
    //   username: action.username,
    //   password: action.password,
    // })
    yield put({ type: POST_SIGN_IN.SUCCESS })
  } catch (error) {
    yield put({ type: POST_SIGN_IN.ERROR, error })
  }
}
