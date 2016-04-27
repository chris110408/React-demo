import moment from 'moment'

import {CALENDAR_DATA,EVENT_STATUS,CURRENT_DATE} from '../../actions/index.jsx';
import {get_calendar_data,get_event_status,get_current_date} from '../../actions/index.jsx';



const INITIAL_STATE={
    calendar_data:{},
    event_status:{refid:'na',
                eventdata:{}
                },
    current_date:moment()};
export default function(state = INITIAL_STATE, action){

    switch(action.type){
        case CALENDAR_DATA:
            return {...state,calendar_data:action.payload};
        case EVENT_STATUS:
            return {...state,event_status:action.payload};
        case CURRENT_DATE:
            return {...state,current_date:action.payload};

    }

    return state
}