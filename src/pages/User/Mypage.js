import React, { useEffect, useState } from 'react'
import { myPage } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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

        
        <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="`/mypage/info/${ id }`">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <a href={`/mypage/info/${ id }`}  > 회원정보 수정 </a><br/>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <a href={`/mypage/currentstatus/${ id }`}  > 진행중인 거래 </a><br/>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <a href={`/mypage/myadopt/${ id }`}  > 입양관리 </a><br/>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <a href={`/mypage/myparcel/${ id }`}  > 분양관리 </a><br/>
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>

    )
}


