import { SIGN_IN, SIGN_OUT } from '../constants/AuthTypes.js'

export function signOut() {
  return { type: SIGN_OUT.REQUEST }
}

export function signIn(authParams) {
  return { type: SIGN_IN.REQUEST, payload: authParams }
}

export function cancelSignIn() {
  return { type: SIGN_IN.CANCEL }
}
