import { combineReducers } from 'redux'
import {
  COMP_SD_INVALID,
  COMP_SD_REQ, COMP_SD_RECV
} from '../../actions/index.jsx'


export default function data_comp_sd_state(state = {
  isFetching: false,
  didInvalidate: false,
  async_data: []
}, action) {
  console.log('data_comp_sd_state state: ', state, ' action: ', action)
  switch (action.type) {
    case COMP_SD_INVALID:
      return Object.assign({}, state, {
        didInvalidate: true
      })

    case COMP_SD_REQ:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case COMP_SD_RECV:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        async_data: action.async_data,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

