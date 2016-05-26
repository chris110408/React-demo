import fetch from 'isomorphic-fetch'

export const COMP_SD_REQ = 'COMP_SD_REQ'
export const COMP_SD_RECV = 'COMP_SD_RECV'
export const COMP_SD_INVALID = 'COMP_SD_INVALID'


function requestAData() {
  return {
    type: COMP_SD_REQ,
  }
}

function receiveAData(json) {
  console.log('comp_sd json: ', json)

  return {
    type: COMP_SD_RECV,
    async_data: json,
    receivedAt: Date.now()
  }
}

function fetchAData() {
  return dispatch => {
    dispatch(requestAData())
    return fetch(`http://localhost:8000/Boyi2_5s_var.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveAData(json)))
  }
}

function shouldFetchAData(state) {
  const async_data = state.data_comp_sd_state.async_data
  console.log('shouldFetchPosts state: ', state, ' async_data: ', async_data)
  
  if (!async_data) {
    return true
  }
  if (state.data_comp_sd_state.isFetching) {
    return false
  }
  return true
}

export function comp_sd_fetchIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAData(getState())) {
      return dispatch(fetchAData())
    }
  }
}
