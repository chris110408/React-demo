




import {HOTEL_DATA,COMP_DATA} from '../../actions/index.jsx';
import {get_hotel_data,get_comp_data} from '../../actions/index.jsx';



const INITIAL_STATE= {
    HOTEL_DATA: {},
    COMP_DATA: {}
}

export default function(state = INITIAL_STATE, action){

    switch(action.type){
        case HOTEL_DATA:
            return {...state,HOTEL_DATA:action.payload};
        case COMP_DATA:
            return {...state,COMP_DATA:action.payload};

    }
    return state
}