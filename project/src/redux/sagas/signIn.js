import { takeEvery, put, call } from 'redux-saga/effects';

import { SignInStart, SignInSuccess, SignInFail } from '../actions/signin';
import getHistory from '../../utils/history';
import { instance } from '../../utils/axios';
import { SIGN_IN, host } from '../../constants';

const checkUser = (response, entry) => {
  if (response.length) {
    if (response[0].login === entry.username &&
      response[0].password === entry.password) {
        return true;
    }
  }
  return false
}

function* auth(action) {
  yield put(SignInStart());
  try {
    const response = yield call (
      () => instance.get(`${host}/users?login=${action.username}`)
    );
    if (!checkUser(response.data, action)) {
      throw "No such user"
    }
    yield put(SignInSuccess(response.data));
    getHistory().push('/contacts');
  } catch(error) {
    console.log(error);
    yield put(SignInFail(error));
  }
}

export function* watchSignin() {
  yield takeEvery(SIGN_IN, auth)
}
