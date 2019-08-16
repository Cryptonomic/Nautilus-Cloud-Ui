import React from 'react';
import styled, { css } from 'styled-components';

import logosvg from '../../assets/img/logo-dark.svg';

export const Container = styled.div`
  width: 100%;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  height: 27px;
  width: 39px;
`;
export const HeaderTitle = styled.p`
  line-height: 39px;
  color: rgb(13, 47, 113);
  font-size: 30px;
  font-family: 'Futura', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4.55px;
  margin: 0 0 0 9px;
  span {
    color: rgb(98, 108, 238);
  }
`;


const Header: React.FC<{}> = () => {
  return (
    <Container>
      <TitleContainer>
        <LogoImg src={logosvg} />
        <HeaderTitle>Nautilus <span>Cloud</span></HeaderTitle>
      </TitleContainer>
    </Container>
  );
};

export default Header;