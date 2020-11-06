import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import imgA from '../assets/logo.PNG';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';


const S = {
  Wrapper: styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${({ isScroll, theme }) =>
    theme.palette.blue};
    box-shadow: ${props =>
      props.isScroll ? '0 0 16px 8px rgba(0, 0, 0, 0.03)' : 'none'};
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    transition: all 0.2s ease-in-out;
    height: 85px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Logo: styled.span`
    color: ${({ isScroll, theme }) =>
    isScroll = theme.palette.black};
    font-weight: 900;
    font-size: 2rem;
    flex: 0 0 25%;
    max-width: 25%;
   
  `,
  Navigation: styled.div`

    flex: 0 0 50%;
    font-weight: 900;
    max-width: 50%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
  `,
  NavigationItem: styled.a`
    color: ${props => props.theme.palette.white};
    color: ${({ isScroll, theme }) =>
      isScroll = theme.palette.black };
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;

    }
  `,
  ButtonWrapper: styled.div`
    flex: 0 0 300px;
    max-width: 17%;
    display: flex;
    justify-content: flex-end;
  `,
  login: styled.div`
  flex: 0 0 40%;
    font-weight: 900;
    max-width: 50%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  `,
  loginItem: styled.a`
    font-size: 1.5rem;
    color: ${props => props.theme.palette.white};
    color: ${({ isScroll, theme }) =>
      isScroll = theme.palette.black };
    margin: 0 0.7rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `,
  bstyle: styled.b`
  flex: 0 0 50%;
  font-weight: 900;
  max-width: 50%;
  font-size: 1rem;
 
  justify-content: center;
 
`,
};

const NAVIGATION_ITEMS = [<Link to='/'>홈으로</Link>,
                          <Link to='/about'>도그블록이란</Link>,
                          <Link to='/board'>강아지들</Link>,
                          <Link to='/'>기타</Link>,
                          ];

export default function Header() {

  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }


  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);
    }
    if (window.pageYOffset === 0) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, [handleScroll]);


  if(user.userData && user.userData.isAdmin ) { 
    return (
      <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
      <S.Logo isScroll={isScroll}>
        <div>
         도그블록
        </div>
        </S.Logo>
        <S.Navigation>
            <S.NavigationItem href = {'/'}  isScroll={isScroll}>
                 홈으로
            </S.NavigationItem>
          
            <S.NavigationItem href = {'/dogregister'}  isScroll={isScroll}>
                 강아지 등록
            </S.NavigationItem>

            <S.NavigationItem href = {'/doglist'}  isScroll={isScroll}>
                 강아지들
            </S.NavigationItem>
        </S.Navigation>
        <S.login>
        <S.loginItem>
          <Button color="cyan" as = "a" href="/admin" type="button" style={{ textDecoration: 'none' }}>
          <S.bstyle>관리자 페이지</S.bstyle> 
          </Button>
          </S.loginItem>
          <S.loginItem>
          <Button  onClick={ logoutHandler }  color="" as = "a" type="button" style={{ textDecoration: 'none' }}>
          <S.bstyle>로그아웃</S.bstyle> 
      </Button>
          </S.loginItem>
          </S.login>
      </S.Header>
    </S.Wrapper>
  )}
  else if(user.userData && user.userData.isAuth){
    return(
    <S.Wrapper isScroll={isScroll}>
    <S.Header isScroll={isScroll}>
    <S.Logo isScroll={isScroll}>
        <div>
         도그블록
        </div>
        </S.Logo>
      <S.Navigation>
          <S.NavigationItem href = {'/'}  isScroll={isScroll}>
               홈으로
          </S.NavigationItem>
        
          <S.NavigationItem href = {'/dogregister'}  isScroll={isScroll}>
               강아지 등록
          </S.NavigationItem>

          <S.NavigationItem href = {'/doglist'}  isScroll={isScroll}>
               강아지들
          </S.NavigationItem>
      </S.Navigation>
      <S.login>
        <S.loginItem>
          <Button color="cyan" as = "a" href="/mypage" type="button" style={{ textDecoration: 'none' }}>
          <S.bstyle>마이페이지</S.bstyle> 
          </Button>
          </S.loginItem>
          <S.loginItem>
          <Button  onClick={ logoutHandler }  color="" as = "a" type="button" style={{ textDecoration: 'none' }}>
          <S.bstyle>로그아웃</S.bstyle> 
      </Button>
          </S.loginItem>
      </S.login>
    </S.Header>
  </S.Wrapper>
)
} else{
    
  return (

    
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Logo isScroll={isScroll}>
        <div>
         도그블록
        </div>
        </S.Logo>
        <S.Navigation>
            <S.NavigationItem href = {'/'}  isScroll={isScroll}>
                 홈으로
            </S.NavigationItem>
          
            <S.NavigationItem href = {'/dogregister'}  isScroll={isScroll}>
                 강아지 등록
            </S.NavigationItem>

            <S.NavigationItem href = {'/doglist'}  isScroll={isScroll}>
                 강아지들
            </S.NavigationItem>
        </S.Navigation>
    <S.login>
        <S.loginItem>
          <Button color="cyan" as = "a" href="/register" type="button" style={{ textDecoration: 'none' }}>
          <S.bstyle>회원가입</S.bstyle> 
          </Button>
          </S.loginItem>
          <S.loginItem>
          <Button color="" as = "a" href = "/login" type="button" style={{ textDecoration: 'none' }}>
          <S.bstyle>로그인</S.bstyle> 
      </Button>
          </S.loginItem>
      </S.login>
      </S.Header>
    </S.Wrapper>
  );
};
};

