import { SIGN_IN } from '../../constants';

const initialState = {
  username: ''
};

export const user = function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
         value: action.username
       }
    default:
      return {
        ...state
      }
  }
}
