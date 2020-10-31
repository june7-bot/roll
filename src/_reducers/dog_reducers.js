import {
    REGISTER_DOG,
    LIST_DOG
} from '../_actions/types';
 

export default function(state={},action){
    switch(action.type){
        case REGISTER_DOG:
            return {...state, register: action.payload }
        
        case LIST_DOG:
            return {...state, register: action.payload }
        default:
            return state;
    }
}