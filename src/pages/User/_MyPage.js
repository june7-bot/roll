import React, { useEffect, useState } from 'react'
import { myPage } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
//import './Mypage.css';
import '../../index.css';
import styled from 'styled-components';

export default function MyPage() {

  
    const S ={
        btn : styled.button`
    width: 48%;
    padding: 14px 0 14px;
    
    `
    }
    
  
    const [id, setId] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myPage()).then(response => {
            if (response.payload.success) {
                setId(response.payload.email)
                  
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
                    <img src={require("../../assets/login.png")} alt="logo" />
                </div>
                <div style={{fontSize: 30, fontFamily: 'ImcreSoojin', textAlign: "center"}}>
                    <h4 className="card-title">마이페이지</h4><br/><br/>
                </div>
                    <a href={`/mypage/info/${ id }`}><S.btn type="button" className="btn btn-inverse-danger  btn-lg" style={{fontFamily: "'Cafe24Oneprettynight"}}>회원정보 수정</S.btn></a>
                    <a href={`/mypage/myadopt/${ id }`}><S.btn type="button" className="btn btn-inverse-danger  btn-lg" style={{fontFamily: "'Cafe24Oneprettynight"}}>입양관리</S.btn></a><br/><br/>
                    <a href={`/mypage/currentstatus/${ id }`}><S.btn type="button" className="btn btn-inverse-danger  btn-lg" style={{fontFamily: "'Cafe24Oneprettynight"}}>진행중인 거래</S.btn></a>
                    <a href={`/mypage/myparcel/${ id }`}><S.btn type="button" className="btn btn-inverse-danger  btn-lg" style={{fontFamily: "'Cafe24Oneprettynight"}}>분양관리</S.btn></a> 
              </div>
            </div>
          </div>
        </div>  
      </div>
        
    )
}


