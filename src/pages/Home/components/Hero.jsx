import React from 'react';
import styled from 'styled-components';
import { heroBackground } from '../../../assets';
import { Button } from '../../../components';


const S = {
  Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 780px;
    background: no-repeat center/cover url(${heroBackground});
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
  `,
  Title: styled.h4`
    ${props => props.theme.typography.title};
    color: #fff;
    margin-bottom: 0.5rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
};

const Hero = () => {
  return (
    
    <S.Background>
      <S.Wrapper>
        <S.Title style={{fontFamily: "'MaplestoryOTFBold'"}}>
        가족이 되어주세요
        </S.Title>
        <S.Description>
         
        </S.Description>
      </S.Wrapper>
    </S.Background>
  );
};

export default Hero;
