import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    MYPAGE_USER,
    PWCHANGE_USER,
    MYWRITE_USER,
    MYADOPT_USER,
    MYPARCEL_USER,
    FINDPW_USER,
    CHANGEPW_USER,
    ADMINTRANSACTION_USER,
    SEEALLUSER_USER,
    PROCEEDLIST_USER,
    BCREGISTER_USER,
    CANCEL_USER,
    CANCELBYSELLER_USER,
    COMPLETETRANSACTION_USER,
    COMPLETEBLOCKTRANSACTION_USER,
    BLOCKLIST_USER
} from './types';

import { USER_SERVER } from '../pages/Config';

export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/user/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/user/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){

    const token = sessionStorage.getItem("X-AUTH-TOKEN")
    
    const request = axios({
        method: 'post', 
        url: `${USER_SERVER}/user/auth`,
        headers: {
          "X-AUTH-TOKEN" : token
        }
      }).then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = axios.get(`${USER_SERVER}/user/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function myPage(){

    const token = sessionStorage.getItem("X-AUTH-TOKEN")
    
    const request = axios({
        method: 'post', 
        url: `${USER_SERVER}/mypage`,
        headers: {
          "X-AUTH-TOKEN" : token
        }
      }).then(response => response.data);

    return {
        type: MYPAGE_USER,
        payload: request
    }
}


export function changePw(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/mypage/userInfoChange`,dataToSubmit)
                .then(response => response.data);

    return {
        type: PWCHANGE_USER,
        payload: request
    }
}


export function myWrite(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/mypage/mywrite`,dataToSubmit)
                .then(response => response.data);

    return {
        type: MYWRITE_USER,
        payload: request
    }
}



export function myAdopt(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/mypage/myadopt`,dataToSubmit)
                .then(response => response.data);

    return {
        type: MYADOPT_USER,
        payload: request
    }
}


export function myParcel(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/mypage/myparcel`,dataToSubmit)
                .then(response => response.data);

    return {
        type: MYPARCEL_USER,
        payload: request
    }
}


export function findPassword(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/user/findpw`,dataToSubmit)
                .then(response => response.data);

    return {
        type: FINDPW_USER,
        payload: request
    }
}

export function changePassword(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/user/changepassword`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: CHANGEPW_USER,
        payload: request
    }
}


export function adminTransaction(){
    const request = axios.post(`${USER_SERVER}/admin/transaction`)
        .then(response => response.data);
    
    return {
        type: ADMINTRANSACTION_USER,
        payload: request
    }
}

export function seeAllUser(){
    const request = axios.post(`${USER_SERVER}/admin/allUser`)
        .then(response => response.data);
    
    return {
        type: SEEALLUSER_USER,
        payload: request
    }
}

export function proceedList(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/mypage/proceed`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: PROCEEDLIST_USER,
        payload: request
    }
}


export function blockRegister(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/admin/blockchain`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: BCREGISTER_USER ,
        payload: request
    }
}

export function cancelDog(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/mypage/cancel`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: CANCEL_USER,
        payload: request
    }
}

export function cancelDogBySeller(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/mypage/cancelbyseller`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: CANCELBYSELLER_USER,
        payload: request
    }
}

export function completeTransaction(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/mypage/completetransaction`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: COMPLETETRANSACTION_USER,
        payload: request
    }
}

export function completeBlockTransaction(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/admin/blockchainSuccess`, dataToSubmit)
        .then(response => response.data);
    
    return {
        type: COMPLETEBLOCKTRANSACTION_USER,
        payload: request
    }
}

export function BlockList(){
    const request = axios.post(`${USER_SERVER}/admin/blockchainlist`)
        .then(response => response.data);
    
    return {
        type: BLOCKLIST_USER,
        payload: request
    }
}