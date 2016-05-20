import { combineReducers } from 'redux'
import {
  COMP_CD_INVALID,
  COMP_CD_REQ, COMP_CD_RECV
} from '../../actions/index.jsx'


export default function data_comp_cd_state(state = {
  isFetching: false,
  didInvalidate: false,
  async_data: []
}, action) {
  console.log('data_comp_cd_state state: ', state, ' action: ', action)
  switch (action.type) {
    case COMP_CD_INVALID:
      return Object.assign({}, state, {
        didInvalidate: true
      })

    case COMP_CD_REQ:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case COMP_CD_RECV:
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

