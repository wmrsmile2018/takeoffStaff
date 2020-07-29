 import { SIGN_IN } from '../../constants';

export const SignInStart = () => ({
  type: `${SIGN_IN}_START`
})

export const SignInSuccess = (data) => ({
  type: `${SIGN_IN}_SUCCESS`,
  payload: {
    ...data[0]
  }
})

export const SignInFail = (error) => ({
  type: `${SIGN_IN}_FAIL`,
  payload: {
    error
  }
})

export const SignInCall = ({username, password}) => ({
  type: `${SIGN_IN}`,
  username,
  password
})
