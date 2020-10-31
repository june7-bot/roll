import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useSelector } from "react-redux";
import axios from 'axios';

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${({ isScroll, theme }) =>
    theme.palette.white};
    box-shadow: ${props =>
      props.isScroll ? '0 0 16px 8px rgba(0, 0, 0, 0.03)' : 'none'};
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    transition: all 0.2s ease-in-out;
    height: ${props => (props.isScroll ? '70px' : '100px')};
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Logo: styled.span`
    color: ${({ isScroll, theme }) =>
    isScroll = theme.palette.black};
    font-weight: 900;
    font-size: 1.5rem;
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
};




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
        <S.Logo isScroll={isScroll}>도그블록</S.Logo>
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
        <S.ButtonWrapper>
          <Button as = "a" href="/admin" fill="solid" type="button">
           관리자페이지
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Button onClick={ logoutHandler } fill="solid" type="button">
           로그아웃
          </Button>
        </S.ButtonWrapper>
      </S.Header>
    </S.Wrapper>
  )}
  else if(user.userData && user.userData.isAuth){
    return(
    <S.Wrapper isScroll={isScroll}>
    <S.Header isScroll={isScroll}>
      <S.Logo isScroll={isScroll}>도그블록</S.Logo>
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
      <S.ButtonWrapper>
        <Button as = "a" href="/mypage" fill="solid" type="button">
         마이페이지
        </Button>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button onClick={ logoutHandler } fill="solid" type="button">
         로그아웃
        </Button>
      </S.ButtonWrapper>
    </S.Header>
  </S.Wrapper>
)
} else{
    
  return (

    
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Logo isScroll={isScroll}>도그블록</S.Logo>
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
       
        <S.ButtonWrapper>
          <Button as = "a" href="/register" fill="solid" type="button">
           회원가입
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Button as = "a" href = "/login" fill="solid" type="button">
           로그인
          </Button>
        </S.ButtonWrapper>
      </S.Header>
    </S.Wrapper>
  );
};
};

