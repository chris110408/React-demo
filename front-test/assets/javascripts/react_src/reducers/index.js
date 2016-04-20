import { combineReducers } from 'redux';

import authReducer from './auth.jsx';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  authenticated: authReducer,
  form:formReducer
});

export default rootReducer;
