

import {USER_HOTELS,CURRENT_HOTEL} from '../../actions/index.jsx';
const INITIAL_STATE={all:[],current:null};
export default function(state = {}, action){

    switch(action.type){
        case USER_HOTELS:
            return {...state,all:action.payload};
        case CURRENT_HOTEL:
            return {...state,current:action.payload};

    }

    return state
}