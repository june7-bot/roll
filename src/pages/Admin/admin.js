import React, { useEffect, useState } from 'react'
import { myPage } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import '../../index.css';

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
            <div style={{fontSize: 50, fontFamily: "'yg-jalnan'"}}>
                <h1 className="card-title">관리자페이지</h1><br/><br/>
            </div>
                <div className="template-demo" style={{fontFamily: "'Cafe24Oneprettynight"}}>
                    <a href={"/admin/transaction"}><button type="button" className="btn btn-inverse-primary  btn-lg">거래 정보 조회</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={"/admin/profile"}><button type="button" className="btn btn-inverse-primary  btn-lg">회원 정보 조회</button></a><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <a href={"/admin/blockchain"}><button type="button" className="btn btn-inverse-primary  btn-lg">블록 체인 조회</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                </div>
        </div>
        
    )
}
