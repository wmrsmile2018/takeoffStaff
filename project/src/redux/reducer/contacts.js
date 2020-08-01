import {
  GET_CONTACTS,
  DELETE_CONTACT,
  PATCH_CONTACT,
  POST_CONTACT,
  SEARCH_CONTACT
} from '../../constants';

const initialState = {
  loading: false,
  contacts: [],
  error: null,
  search: []

};

export const contacts = function reducer(state = initialState, action) {
  switch (action.type) {
    case `${SEARCH_CONTACT}_SUCCESS`:
      return {
        ...state,
        search: action.payload.contacts,
        loading: false
      }
    case `${SEARCH_CONTACT}_START`:
      return {
        ...state,
        loading: true
      }
    case `${POST_CONTACT}_SUCCESS`:
      return {
        ...state,
        contacts: [action.payload.data, ...state.contacts],
        loading: false
      }
    case `${POST_CONTACT}_START`:
      return {
        ...state,
        loading: true
      }
    case `${POST_CONTACT}_FAIL`:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
////////////////////////////////////////////////////////////////////////////////
    case `${PATCH_CONTACT}_SUCCESS`:
      return {
        ...state,
        contacts: state.contacts.map(val => val.id === action.payload.id ?
          { ...val, contact_name: action.payload.contact_name, tel: action.payload.tel } :
          val
        ),
        loading: false
      }
    case `${PATCH_CONTACT}_START`:
      return {
        ...state,
        loading: true
      }
    case `${PATCH_CONTACT}_FAIL`:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
////////////////////////////////////////////////////////////////////////////////
    case `${DELETE_CONTACT}_SUCCESS`:
      return {
        ...state,
        contacts: state.contacts.filter(val => val.id !== action.payload.id),
        loading: false
      }
    case `${DELETE_CONTACT}_START`:
      return {
        ...state,
        loading: true
      }
    case `${DELETE_CONTACT}_FAIL`:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
////////////////////////////////////////////////////////////////////////////////
    case`${GET_CONTACTS}_START`:
      return {
        ...state,
        loading: true,
      }
    case `${GET_CONTACTS}_SUCCESS`:
      return {
        ...state,
        loading: false,
        contacts: action.payload.data
      }
    case `${GET_CONTACTS}_FAIL`:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
