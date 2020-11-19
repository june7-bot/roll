import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import '../index.css';
import { useSelector } from "react-redux";
import imgA from '../assets/login.PNG';
import { Button } from 'reactstrap';
import ChatbotApp from '../chatbot/ChatbotApp'
import CbModal from '../chatbot/CbModal';

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: fixed;
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
    height: ${props => (props.isScroll ? '70px' : '80px')};
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
    height : 30%;
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
  NavigationItem2: styled.a`
    color: ${props => props.theme.palette.white};
    color: ${({ isScroll, theme }) =>
      isScroll = theme.palette.black };
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
    height : 90;
    flex-direction : column; 
  `,
  ButtonWrapper: styled.div`
    flex: 0 0 300px;
    max-width: 17%;
  
    display: flex;
    justify-content: flex-end;
  `,
  chatbot: styled.div`
  position: absolute;
  right: 0;
`,
DropdownContent: styled.a`
color: black;
font-size: 0.8rem;
 display : flex;
 flex-direction : column; 
}
  `,
NavigationForDog: styled.div`
&:hover {
  S.DropdownContent : { display : block}
}
`,
Dropdown: styled.div`
display : flex
`
};


export default function Header() {
  const [hidden, setHidden] = useState(true);
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
          <a href='/'>
        <img
         src={ imgA }
         width='120'
        height='73'
        alt='testA' />
        </a>
        </div>
          </S.Logo>
        <S.Navigation style={{fontFamily: "Cafe24Oneprettynight"}}>
            <S.NavigationItem href = {'/'}  isScroll={isScroll}>
                 홈으로
            </S.NavigationItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
            <S.NavigationItem href = {'/dogregister'}  isScroll={isScroll}>
                 강아지 등록
            </S.NavigationItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <S.NavigationItem href = {'/doglist'}  isScroll={isScroll}>
            
                 강아지들
            </S.NavigationItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </S.Navigation>
       
          <Button as = "a" href="/admin" fill="solid" type="button" className="btn btn-gradient-danger btn-fw" style={{fontFamily: "Cafe24Oneprettynight"}}>
           관리자페이지
          </Button>
          <Button onClick={ logoutHandler } fill="solid" type="button" className="btn btn-gradient-secondary btn-fw" style={{fontFamily: "Cafe24Oneprettynight"}}>
           로그아웃
          </Button>
          <CbModal/>
      </S.Header>
   
    </S.Wrapper>
  )}
  else if(user.userData && user.userData.isAuth){
    return(
    <S.Wrapper isScroll={isScroll}>
    <S.Header isScroll={isScroll}>
      <S.Logo isScroll={isScroll}>
      <div>
          <a href='/'>
        <img
         src={ imgA }
         width='120'
        height='73'
        alt='testA' />
        </a>
        </div>
      </S.Logo>
      <S.Navigation style={{fontFamily: "Cafe24Oneprettynight"}}>
          <S.NavigationItem href = {'/'}  isScroll={isScroll}>
               홈으로
          </S.NavigationItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
          <S.NavigationItem href = {'/dogregister'}  isScroll={isScroll}>
               강아지 등록
          </S.NavigationItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <S.NavigationItem href = {'/doglist'}  isScroll={isScroll}>
               강아지들
          </S.NavigationItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </S.Navigation>
      
     
        <Button as = "a" href="/mypage" fill="" type="button" className="btn btn-gradient-danger btn-fw" style={{fontFamily: "Cafe24Oneprettynight"}}>
         마이페이지
        </Button><br/>
        <Button onClick={ logoutHandler } fill="" type="button" className="btn btn-gradient-secondary btn-fw" style={{fontFamily: "Cafe24Oneprettynight"}}>
         로그아웃
        </Button>
      
        <CbModal/>
    </S.Header>
   
  </S.Wrapper>
)
} else{
    
  return (

    
    <S.Wrapper isScroll={ isScroll }>
      <S.Header isScroll={ isScroll }>
        <S.Logo isScroll={ isScroll}>
        <div>
          <a href='/'>
        <img
         src={ imgA }
         width='120'
        height='73'
        alt='testA' />
        </a>
        </div>
        </S.Logo>
        <S.Navigation style={{fontFamily: "Cafe24Oneprettynight"}}>
            <S.NavigationItem href = {'/'}  isScroll={isScroll}>
                 홈으로
            </S.NavigationItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
            <S.NavigationItem href = {'/dogregister'}  isScroll={isScroll}>
                 강아지 등록
            </S.NavigationItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <S.NavigationItem2  href = {'/doglist'}  onMouseOver={() => setHidden(!hidden)} isScroll={isScroll}>
                 강아지들
            </S.NavigationItem2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        </S.Navigation>
    
        
          <Button  as = "a" href="/register" type="button" style={{ textDecoration: 'none' }} className="btn btn-gradient-danger btn-fw" style={{fontFamily: "Cafe24Oneprettynight"}}>
           회원가입
          </Button>
          <Button  as = "a" href = "/login" type="button" style={{ textDecoration: 'none' }} className="btn btn-gradient-danger btn-fw" style={{fontFamily: "Cafe24Oneprettynight"}}>
           로그인
          </Button>
        
      <CbModal/>
      </S.Header>
     {/* <S.chatbot> */}

{/* <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/211aa467-f1ca-4004-9727-0023d4b11b64">
</iframe> */}
     
       {/* <ChatbotApp/>
      </S.chatbot>  */}
    </S.Wrapper>
  );
};
};

