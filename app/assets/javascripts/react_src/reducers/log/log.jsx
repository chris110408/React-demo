


import {LOG_DATA} from '../../actions/index.jsx';



export default function(state = [], action){

    switch(action.type){
        case LOG_DATA:
            return action.payload;
    }

    return state
}