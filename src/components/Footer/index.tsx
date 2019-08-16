import React from 'react';
import {
  Container, NavContainer, ShareContainer, LinkItem, ConnectTxt, SocialImg, SpSymbol
} from './style';

import twitterSvg from '../../assets/img/sm-twitter_icon.svg';
import smSvg from '../../assets/img/sm_icon.svg';
import mediumSvg from '../../assets/img/sm-medium_icon.svg';
import githubSvg from '../../assets/img/github.svg';

const Footer: React.FC<{}> = () => {
  return (
    <Container>
      <NavContainer>
        <LinkItem>About</LinkItem>
        <SpSymbol> / </SpSymbol>
        <LinkItem>Projects</LinkItem>
        <SpSymbol> / </SpSymbol>
        <LinkItem>Community</LinkItem>
        <SpSymbol> / </SpSymbol>
        <LinkItem>Docs</LinkItem>
      </NavContainer>
      <ShareContainer>
        <ConnectTxt>Connect with us</ConnectTxt>
        <SocialImg src={twitterSvg}></SocialImg>
        <SocialImg src={githubSvg}></SocialImg>
        <SocialImg src={smSvg}></SocialImg>
        <SocialImg src={mediumSvg}></SocialImg>
      </ShareContainer>
    </Container>
  );
};

export default Footer;