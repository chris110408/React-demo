//dummydata will replace by ajax call

import DummyData from '../../../dummyData/index'

export const HOTEL_DATA= 'HOTEL_DATA'
export const COMP_DATA= 'COMP_DATA'


export function get_hotel_data(hotelId){
    let data =  DummyData.hotelData_OverView[hotelId]
    const request=data;
    return {
        type:HOTEL_DATA,
        payload:request
    }
}

export function get_comp_data(hotelId){
    let data =  DummyData.compData_OverView[hotelId]

    const request=data
    return {
        type:COMP_DATA,
        payload:request
    }
}
