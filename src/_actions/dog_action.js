import axios from 'axios';
import {
    REGISTER_DOG,
    LIST_DOG,
    ONE_DOG,
    ORDER_DOG
} from './types';

import { USER_SERVER } from '../pages/Config';

export function registerDog(dataToSubmit){

   const config = { headers: { "Content-Type": "multipart/form-data" } } 

    const request = axios.post(`${USER_SERVER}/dog/register`,dataToSubmit,config)       
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


export function oneDog(dataToSubmit){
    
    const request = axios.post(`${USER_SERVER}/dog/one`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: ONE_DOG,
        payload: request
    }
}


export function orderDog(dataToSubmit){
    
    const request = axios.post(`${USER_SERVER}/order/dog`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: ORDER_DOG,
        payload: request
    }
}


