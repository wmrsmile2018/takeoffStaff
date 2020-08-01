import {
   GET_CONTACTS,
   DELETE_CONTACT,
   PATCH_CONTACT,
   POST_CONTACT,
   SEARCH_CONTACT
} from '../../constants';

export const GetContactsStart = () => ({
  type: `${GET_CONTACTS}_START`
})

export const GetContactsSuccess = (data) => ({
  type: `${GET_CONTACTS}_SUCCESS`,
  payload: {
    data
  }
})

export const GetContactsFail = (error) => ({
  type: `${GET_CONTACTS}_FAIL`,
  payload: {
    error
  }

})

export const GetContactsCall = ({owner}) => ({
  type: `${GET_CONTACTS}`,
  owner
})
////////////////////////////////////////////////////////////////////////////////
export const DeleteContactCall = ({id}) => ({
  type: `${DELETE_CONTACT}`,
  id
})

export const DeleteContactStart = () => ({
  type: `${DELETE_CONTACT}_START`
})

export const DeleteContactSuccess = ({id}) => ({
  type: `${DELETE_CONTACT}_SUCCESS`,
  payload: {
    id
  }
})

export const DeleteContactFail = () => ({
  type: `${DELETE_CONTACT}_FAIL`
})

////////////////////////////////////////////////////////////////////////////////
export const PatchContactCall = ({id, tel, name}) => ({
  type: `${PATCH_CONTACT}`,
  id,
  tel,
  name
})

export const PatchContactStart = () => ({
  type: `${PATCH_CONTACT}_START`
})

export const PatchContactSuccess = ({id, contact_name, tel}) => ({
  type: `${PATCH_CONTACT}_SUCCESS`,
  payload: {
    id,
    contact_name,
    tel
  }
})

export const PatchContactFail = () => ({
  type: `${PATCH_CONTACT}_FAIL`
})

////////////////////////////////////////////////////////////////////////////////
export const PostContactCall = ({id, tel, name, owner}) => ({
  type: `${POST_CONTACT}`,
  id,
  tel,
  name,
  owner
})

export const PostContactStart = () => ({
  type: `${POST_CONTACT}_START`
})

export const PostContactSuccess = (data) => ({
  type: `${POST_CONTACT}_SUCCESS`,
  payload: {
    data
  }
})

export const PostContactFail = () => ({
  type: `${POST_CONTACT}_FAIL`
})

////////////////////////////////////////////////////////////////////////////////
export const SearchContactCall = ({tel, name}) => ({
  type: `${SEARCH_CONTACT}`,
  tel,
  name,
})

export const SearchContactStart = () => ({
  type: `${SEARCH_CONTACT}_START`
})

// export const SearchContactSuccess = (data) => {
//   console.log(data);
// }
//
export const SearchContactSuccess = (data) => ({
  type: `${SEARCH_CONTACT}_SUCCESS`,
  payload: {
    ...data
  }
})
