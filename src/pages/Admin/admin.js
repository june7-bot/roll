import React, { useEffect, useState } from 'react'
import { myPage } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import '../../index.css';
import styled from 'styled-components';

export default function Admin() {

    const S ={
        btn : styled.button`
    width: 48%;
    padding: 14px 0 14px;
    
    `
    }
    
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
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                    <img src={require("../../assets/login.PNG")} alt="logo" />
                </div>
                <div style={{fontSize: 30, fontFamily: 'ImcreSoojin', textAlign: "center"}}>
                    <h4 className="card-title">관리자페이지</h4><br/><br/>
                </div>
                    <a href={`/admin/transaction`}><S.btn type="button" className="btn btn-inverse-danger  btn-lg" style={{fontFamily: "'Cafe24Oneprettynight"}}>거래 정보</S.btn></a>
                    <a href={`/admin/profile`}><S.btn type="button" className="btn btn-inverse-danger  btn-lg" style={{fontFamily: "'Cafe24Oneprettynight"}}>회원 정보 조회</S.btn></a><br/><br/>
                    <a href={`/admin/blockchain`}><S.btn type="button" className="btn btn-inverse-danger  btn-lg" style={{fontFamily: "'Cafe24Oneprettynight"}}>블록 체인</S.btn></a>
              </div>
            </div>
          </div>
        </div>  
      </div>
        
    )
}
