import React, { useEffect, useState } from 'react'
import { myPage } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

export default function Admin() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myPage()).then(response => {
            if (response.payload.success) {
               
                
                           }
          else{
            alert("에러")
          }           
          }) 
    }, []);

    return (
        <div>
         관리자페이지<br/><br/>

         <a href={"/admin/transaction"}> 거래 정보 조회 </a><br/><br/>
         <a href={"/admin/profile"}> 회원 정보 조회 </a><br/>
         <a href={"/admin/blockchainlist"}> 블록체인 정보들 조회 </a><br/>
        
        </div>
    )
}
