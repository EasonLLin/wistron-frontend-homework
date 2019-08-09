import {
  UPDATE_USER_NAME,
  UPDATE_PASSWORD,
  POST_SIGN_IN,
  POST_SIGN_OUT,
  TOGGLE_SIGN_IN_FORM,
} from '../constants/AuthTypes.js'

const initial = {
  status: null,
  isAuthenticated: false,
  userName: null,
  password: null,
  showSignInForm: false,
}

export default (state = initial, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        userNmae: action.payload,
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }

    case POST_SIGN_IN.REQUEST:
      return {
        ...state,
        status: 'request',
      }
    case POST_SIGN_IN.SUCCESS:
      return {
        ...state,
        status: 'success',
        isAuthenticated: true,
      }
    case POST_SIGN_IN.FAILURE:
      return {
        ...state,
        status: 'failure',
      }
    case POST_SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
      }
    case TOGGLE_SIGN_IN_FORM:
      return {
        ...state,
        showSignInForm: !state.showSignInForm,
      }
    default:
      return state
  }
}
