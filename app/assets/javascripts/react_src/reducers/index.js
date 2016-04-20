import { combineReducers } from 'redux';


import AuthReducer from './auth/auth.jsx';
import {reducer as formReducer} from 'redux-form'
import OpenStatus from './sidebar/sidebar.jsx'

import userHotels from './topbar/user_hotels.jsx'
import ratedata from './rategrid/rategrid.jsx'

import logdata from './log/log.jsx'

const rootReducer = combineReducers({
  authenticated: AuthReducer,
  form:formReducer,
  sidebar_open:OpenStatus,
  user_hotels:userHotels,
  log_data:logdata
});

export default rootReducer;
