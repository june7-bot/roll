import axios from 'axios';
import {
    REGISTER_DOG,
    LIST_DOG
} from './types';

import { USER_SERVER } from '../pages/Config';

export function registerDog(dataToSubmit){

    const request = axios.post(`${USER_SERVER}/dog/register`,dataToSubmit)       
        .then(response => response.data)
    
    return {
        type: REGISTER_DOG,
        payload: request
    }

   
}


export function listDog(){

    const request = axios.post(`${USER_SERVER}/dog/list`)
        .then(response => response.data);
    
    return {
        type: LIST_DOG,
        payload: request
    }
}



