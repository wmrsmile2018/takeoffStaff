import { SIGN_IN } = '../../constants';

export const SignInStart = () => ({
  type: `${SIGN_IN}_START`
})

export const SignInSuccess = () => ({
  type: `${SIGN_IN}_SUCCESS`
})

export const SignInFail = () => ({
  type: `${SIGN_IN}_FAIL`
})

export const SignIn = ({username, password}) => ({
  type: `${SIGN_IN}`,
  username: username,
  password: password
})
