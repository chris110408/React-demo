import {SIDEBAR_OPEN} from '../../actions/index.jsx';

export default function(state = false, action){
    switch(action.type){
        case SIDEBAR_OPEN:
            return action.payload;
    }

    return state
}