import { all } from 'redux-saga/effects';

import { watchSignin } from './signIn';
import { watchContacts } from './contacts';

export function* rootSaga() {
  yield all([
    watchSignin(),
    watchContacts()
  ])
}
