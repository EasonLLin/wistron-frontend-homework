import { delay } from 'redux-saga'
import {
  put,
  takeEvery,
  all,
  call,
  fork,
  take,
  cancel,
} from 'redux-saga/effects'
import { SIGN_IN, SIGN_OUT } from './constants/AuthTypes.js'

export default function* rootSaga() {
  yield all([watchRequestLogin()])
}

export function* watchRequestLogin() {
  yield takeEvery(SIGN_IN.REQUEST, loginFlow)
}

export function* authorize({ username, password }) {
  try {
    if (username !== 'guest' && password !== 'guest') {
      return false
    } else {
    }
    // const response = yield call(loginAPI, {
    //   username: action.payload.username,
    //   password: action.payload.password,
    // })
    yield put({ type: SIGN_IN.SUCCESS })
    console.log('1')
  } catch (error) {
    console.log('err')
    yield put({ type: SIGN_IN.ERROR, error })
  }
}

export function* loginFlow({ payload }) {
  console.log('payload', payload)
  const task = yield fork(authorize, {
    username: payload.username,
    password: payload.password,
  })
  yield take(SIGN_IN.CANCEL)
  yield cancel(task)
}
