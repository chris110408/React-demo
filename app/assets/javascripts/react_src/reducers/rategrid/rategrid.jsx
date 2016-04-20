import {RATE_DATA} from '../../actions/index.jsx';



export default function(state = [], action){

    switch(action.type){
        case RATE_DATA:
            return action.payload;
    }

    return state
}