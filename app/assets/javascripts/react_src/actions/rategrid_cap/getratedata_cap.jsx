import fetch from 'isomorphic-fetch'

export const COMP_CD_REQ = 'COMP_CD_REQ'
export const COMP_CD_RECV = 'COMP_CD_RECV'
export const COMP_CD_INVALID = 'COMP_CD_INVALID'


function requestAData() {
  return {
    type: COMP_CD_REQ,
  }
}

function receiveAData(json) {
  console.log(json)

  return {
    type: COMP_CD_RECV,
    async_data: json,
    receivedAt: Date.now()
  }
}

function fetchAData() {
  return dispatch => {
    dispatch(requestAData())
    return fetch(`http://localhost:8000/Boyi2_5s_compset.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveAData(json)))
  }
}

function shouldFetchAData(state) {
  const async_data = state.data_comp_cd_state.async_data
  console.log('shouldFetchPosts state: ', state, ' async_data: ', async_data)
  
  if (!async_data) {
    return true
  }
  if (state.data_comp_cd_state.isFetching) {
    return false
  }
  return true
}

export function comp_cd_fetchIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAData(getState())) {
      return dispatch(fetchAData())
    }
  }
}
