import {RATE_DATA_CAP} from '../../actions/index.jsx';



export default function(state = [], action){

    switch(action.type){
        case RATE_DATA_CAP:
            return action.payload;
    }

    return state
}