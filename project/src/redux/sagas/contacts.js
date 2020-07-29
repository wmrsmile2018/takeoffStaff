import { takeEvery, put, call } from 'redux-saga/effects';

import {
  GetContactsStart, GetContactsSuccess, GetContactsFail,
  DeleteContactFail, DeleteContactStart, DeleteContactSuccess,
  PatchContactStart, PatchContactSuccess, PatchContactFail,
  PostContactStart, PostContactSuccess, PostContactFail
} from '../actions/contacts';
import getHistory from '../../utils/history';
import { instance } from '../../utils/axios';
import { GET_CONTACTS, DELETE_CONTACT, PATCH_CONTACT, POST_CONTACT, host } from '../../constants';


function* getContacts(action) {
  yield put(GetContactsStart());
  try {
    const response = yield call (
      () => instance.get(`${host}/contacts?owner=${action.owner}`)
    );
    yield put(GetContactsSuccess(response.data));
  } catch(error) {
    console.log(error);
    yield put(GetContactsFail(error));
  }
}

function* deleteContact(action) {
  yield put(DeleteContactStart());
  try {
    const response = yield call (
      () => instance.delete(`${host}/contacts/${action.id}`)
    );
    yield put(DeleteContactSuccess({id: action.id}));
  } catch(error) {
    console.log(error);
    yield put(DeleteContactFail(error));
  }
}

function* patchContact(action) {
  yield put(PatchContactStart());
  try {
    const response = yield call (
      () => instance.patch(`${host}/contacts/${action.id}`, {
          tel: action.tel,
          contact_name: action.name
        })
    );
    const { id, contact_name, tel } = response.data;
    yield put(PatchContactSuccess({id: id, contact_name: contact_name, tel: tel}));
  } catch(error) {
    console.log(error);
    yield put(PatchContactFail(error));
  }
}

function* postContact(action) {
  yield put(PostContactStart());
  try {
    const response = yield call (
      () => instance.post(`${host}/contacts`, {
          id: action.id,
          owner: action.owner,
          contact_name: action.name,
          tel: action.tel
        })
    );
    const { id, owner, contact_name, tel } = response.data;
    yield put(PostContactSuccess({id: id, owner: owner, contact_name: contact_name, tel: tel}));
  } catch(error) {
    console.log(error);
    yield put(PostContactFail(error));
  }
}

export function* watchContacts() {
  yield takeEvery(`${GET_CONTACTS}`, getContacts);
  yield takeEvery(`${DELETE_CONTACT}`, deleteContact);
  yield takeEvery(`${PATCH_CONTACT}`, patchContact);
  yield takeEvery(`${POST_CONTACT}`, postContact);
}
