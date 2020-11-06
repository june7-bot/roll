import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';

//var direction =require('../../../_maps/map.html');

const S = {
  Wrapper: styled.section`
    width: 100%;
    padding: 120px 0;
    background-color: ${props => props.theme.palette.background};
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
    text-align: center;
  `,
};

const Banner = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
  };

  return (
    // <S.Wrapper>
    //   <S.Label {...animatedItem[0]}>도그 블록</S.Label>
    //   <S.Title {...animatedItem[1]}>
    //     찾아오시는 길
    //   </S.Title>
    //   <div {...animatedItem[2]}>
    //   {/* <img src = {"http://kko.to/gnZiXs3YH"} width = {400} /> */}
      
    //   </div>
     
    <div>sds</div>
    // </S.Wrapper>
    // <div dangerouslySetInnerHTML={ {__html: direction} } />
  );
};

export default Banner;
