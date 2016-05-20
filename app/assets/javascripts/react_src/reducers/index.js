import { combineReducers } from 'redux';


import AuthReducer from './auth/auth.jsx';
import {reducer as formReducer} from 'redux-form'
import OpenStatus from './sidebar/sidebar.jsx'

import userHotels from './topbar/user_hotels.jsx'
import ratedata from './rategrid/rategrid.jsx'
import data_comp_cd_state from './rategrid_cap/rategrid_cap.jsx'
import data_comp_sd_state from './rategrid_stay/rategrid_stay.jsx'

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
  data_comp_cd_state:data_comp_cd_state,
  data_comp_sd_state:data_comp_sd_state,
  catendar_state:calendar,
  overview_state:overview
});

export default rootReducer;
