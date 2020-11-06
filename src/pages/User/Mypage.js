import React, { useEffect, useState } from 'react'
import { myPage } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
//import './Mypage.css';
import '../../index.css';

export default function MyPage() {
    
  
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
            <div style={{fontSize: 50, fontFamily: "'yg-jalnan'"}}>
                <h1 className="card-title">마이페이지</h1><br/><br/>
            </div>
                <div className="template-demo" style={{fontFamily: "'Cafe24Oneprettynight"}}>
                    <a href={`/mypage/info/${ id }`}><button type="button" className="btn btn-inverse-primary  btn-lg">회원정보 수정</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={`/mypage/myadopt/${ id }`}><button type="button" className="btn btn-inverse-primary  btn-lg">입양관리</button></a><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <a href={`/mypage/currentstatus/${ id }`}><button type="button" className="btn btn-inverse-primary  btn-lg">진행중인 거래</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={`/mypage/myparcel/${ id }`}><button type="button" className="btn btn-inverse-primary  btn-lg">분양관리</button></a>
                </div>
      </div>
    )
}


