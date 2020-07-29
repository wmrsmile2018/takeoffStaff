import { combineReducers } from 'redux';

import { user } from './user'
import { contacts } from './contacts';

export const rootReducer = combineReducers({ user, contacts });
