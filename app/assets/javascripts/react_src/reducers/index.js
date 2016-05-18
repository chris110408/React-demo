import { combineReducers } from 'redux';


import AuthReducer from './auth/auth.jsx';
import {reducer as formReducer} from 'redux-form'
import OpenStatus from './sidebar/sidebar.jsx'

import userHotels from './topbar/user_hotels.jsx'
import ratedata from './rategrid/rategrid.jsx'
import ratedata_cap from './rategrid_cap/rategrid_cap.jsx'

import logdata from './log/log.jsx'
import calendar from './calendar/calendar.jsx'

import overview from './overview/overview.jsx'

const rootReducer = combineReducers({
  authenticated: AuthReducer,
  form:formReducer,
  sidebar_open:OpenStatus,
  user_hotels:userHotels,
  log_data:logdata,
  ratedata:ratedata,
  ratedata_cap:ratedata_cap,
  catendar_state:calendar,
  overview_state:overview
});

export default rootReducer;
