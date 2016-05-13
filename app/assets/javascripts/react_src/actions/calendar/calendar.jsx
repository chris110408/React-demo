//dummydata will replace by ajax call

import DummyData from '../../../dummyData/index'

export const CALENDAR_DATA= 'CALENDAR_DATA'
export const EVENT_STATUS= 'EVENT_STATUS'
export const CURRENT_DATE= ' CURRENT_DATE'


export function get_calendar_data(hotelId){
    let data =  DummyData.OutPut(hotelId)
    console.log('calendar api')
    console.log(data)
    const request=data[hotelId]
    return {
        type:CALENDAR_DATA,
        payload:request
    }
}

export function get_event_status(event_status){
    return {
        type:EVENT_STATUS,
        payload:event_status
    }
}

export function get_current_date(currentDate){
    return {
        type:CURRENT_DATE,
        payload:currentDate
    }
}