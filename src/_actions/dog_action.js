import axios from 'axios';
import {
    REGISTER_DOG,
    LIST_DOG,
    ONE_DOG,
    ORDER_DOG,
    SMALLLIST_DOG,
    MIDLIST_DOG,
    BIGLIST_DOG,
    SMALLLISTKIND_DOG,
    MIDLISTKIND_DOG,
    BIGDOGLISTKIND_DOG

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

export function DogListsmall(){
    
    const request = axios.post(`${USER_SERVER}/dog/small`)
        .then(response => response.data);
    
    return {
        type: SMALLLIST_DOG,
        payload: request
    }
}
export function DogListmid(){
    
    const request = axios.post(`${USER_SERVER}/dog/mid`)
        .then(response => response.data);
    
    return {
        type: MIDLIST_DOG,
        payload: request
    }
}

export function DogListbig(){
    
    const request = axios.post(`${USER_SERVER}/dog/big`)
        .then(response => response.data);
    
    return {
        type: BIGLIST_DOG,
        payload: request
    }
}

export function SmallDogListKind(num,dataToSubmit){
    
    const request = axios.post(`${USER_SERVER}/dog/small/${num}`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type:SMALLLISTKIND_DOG,
        payload: request
    }
}

export function MidDogListKind(num,dataToSubmit){
    
    const request = axios.post(`${USER_SERVER}/dog/mid/${num}`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type:MIDLISTKIND_DOG,
        payload: request
    }
}

export function BigDogListKind(num,dataToSubmit){
    
    const request = axios.post(`${USER_SERVER}/dog/big/${num}`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type:BIGDOGLISTKIND_DOG,
        payload: request
    }
}