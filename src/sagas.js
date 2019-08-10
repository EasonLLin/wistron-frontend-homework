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
import { loginAPI } from './services/api/loginAPI.js'

export default function* rootSaga() {
  yield all([watchRequestLogin()])
}

export function* watchRequestLogin() {
  yield takeEvery(SIGN_IN.REQUEST, loginFlow)
}

export function* authorize({ username, password, history }) {
  try {
    const response = yield call(loginAPI, {
      username: username,
      password: password,
    })

    yield put({ type: SIGN_IN.SUCCESS })
    yield put(history.push('/protected'))
  } catch (error) {
    yield put({ type: SIGN_IN.FAILURE, error })
  }
}

export function* loginFlow({ payload }) {
  console.log('payload', payload)
  const task = yield fork(authorize, {
    username: payload.username,
    password: payload.password,
    history: payload.history,
  })
  yield take(SIGN_IN.CANCEL)
  yield cancel(task)
}
