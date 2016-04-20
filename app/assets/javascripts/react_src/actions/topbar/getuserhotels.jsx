//dummydata will replace by ajax call

import DummyData from '../../../dummyData/index'

export const USER_HOTELS= 'USER_HOTELS'
export const CURRENT_HOTEL= 'CURRENT_HOTEL'



export function getuserhotels(user){
    const request=Object.keys(DummyData.Boyi).map((k)=> DummyData.Boyi[''+k] )
    return {
        type:USER_HOTELS,
        payload:request
    }
}

export function get_current_hotel(id){
    const request=(DummyData.Boyi[''+id])
    return {
        type:CURRENT_HOTEL,
        payload:request
    }
}