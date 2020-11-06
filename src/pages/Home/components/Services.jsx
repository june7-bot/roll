import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    margin-top: 680px;
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
    text-align: center;
    margin-bottom: 4rem;
  `,
  ItemWrapper: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  ItemBox: styled.li`
    width: 380px;
    padding: 3rem 2rem;
    text-align: center;
    background-color: ${props => props.theme.palette.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
  `,
  ItemTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  ItemDescription: styled.p`
    ${props => props.theme.typography.description};
    margin-bottom: 1.5rem;
  `,
  ItemButton: styled.button`
    ${props => props.theme.typography.textbutton};
    color: ${props => props.theme.palette.secondary};
    margin-top: auto;
    cursor: pointer;
  `,
};

const SERVICES_ITEMS = [
  {
    title: '강아지 공장 방지',
    description:
    '저희 도그블록은 출생지가 명확하지 않은 강아지는 받지 않습니다',
  },
  {
    title: '유기 방지',
    description:
    '저희 도그블록은 구매자 정보를 저장하여 유기행위를 예방합니다'
  
  },
  {
    title: '유실견 줄이기',
    description:
    '저희 도그블록은 강아지 코 지문 저장 유실 시 주인을 찾을 수 있게 도와줍니다.'
 
  },
];

const Services = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
  };

  return (
    <S.Wrapper>
      <S.Title>
       반려동물 문화 함께 만들어가요
      </S.Title>
      <S.ItemWrapper>
        {SERVICES_ITEMS.map((item, index) => (
          <S.ItemBox key={item.title} {...animatedItem[index]}>
            <S.ItemTitle>{item.title}</S.ItemTitle>
            <S.ItemDescription>{item.description}</S.ItemDescription>
            <S.ItemButton>{item.button}</S.ItemButton>
          </S.ItemBox>
        ))}
      </S.ItemWrapper>
    </S.Wrapper>
  );
};

export default Services;
