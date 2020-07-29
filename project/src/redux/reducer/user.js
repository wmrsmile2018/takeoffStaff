import { SIGN_IN } from '../../constants';

const initialState = {
  username: '',
  type: '',
  tel: '',
  access: false,
  loading: false,
};

export const user = function reducer(state = initialState, action) {
  switch (action.type) {
    case`${SIGN_IN}_START`:
      return {
        loading: true,
      }
    case `${SIGN_IN}_SUCCESS`:
      return {
        ...state,
        username: action.payload.login,
        type: action.payload.type,
        tel: action.payload.tel,
        access: true,
        loading: false,
      }
    case `${SIGN_IN}_FAIL`:
      return {
        ...state,
        access: false,
        loading: false,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
