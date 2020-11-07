import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';
import Map from '../../Map/MapContent';

const S = {
  Wrapper: styled.div`
    width: 100%;
    padding: 100px 0 0 170px;
    background-color: ${props => props.theme.palette.background};
    display: flex;

  `,
  Label: styled.div`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 3rem;
    margin-left : 5rem
    text-align : center
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
    margin-top: 2rem;
    margin-left : rem;
    display: inline-block;
    width: 500px;
    height: 100px;
    margin: 1em;
  `,
};

const Banner = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.1),
    2: useScrollFadeIn('up', 1, 0.1),
    3: useScrollFadeIn('up', 1, 0.2),
  };

  return (
    <S.Wrapper>
      <S.Label {...animatedItem[0]}>도그 블록</S.Label>
      <S.Title {...animatedItem[1]}>
        신도림점 오시는 길 <br/><br/>
        문의 02-1234-5678
      </S.Title>
     
      <S.Label {...animatedItem[3]}>
      <Map/>
      </S.Label>
    
    </S.Wrapper>
  );
};

export default Banner;
