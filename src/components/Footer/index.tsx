import React from 'react';
import {
  Container, NavContainer, ShareContainer, LinkItem, ConnectTxt, SocialImg, SpSymbol
} from './style';

import twitterSvg from '../../assets/img/sm-twitter_icon.svg';
import smSvg from '../../assets/img/sm_icon.svg';
import mediumSvg from '../../assets/img/sm-medium_icon.svg';
import githubSvg from '../../assets/img/github.svg';

const urls = {
  about: 'https://cryptonomic.tech',
  community: 'https://www.meetup.com/Cryptonomic-NYC-Events/',
  docs: 'https://cryptonomic.github.io/ConseilJS/#/',
  twitter: 'https://twitter.com/cryptonomictech',
  gitHub: 'https://github.com/Cryptonomic',
  riot: 'https://matrix.to/#/!rUwpbdwWhWgKINPyOD:cryptonomic.tech?via=cryptonomic.tech&via=matrix.org&via=ostez.com',
  medium: 'https://medium.com/the-cryptonomic-aperiodical'
};

const Footer: React.FC<{}> = () => {
  function openUrl(url) {
    window.open(url, '_blank');
  }
  return (
    <Container>
      <NavContainer>
        <LinkItem onClick={() => openUrl(urls.about)}>About</LinkItem>
        <SpSymbol> / </SpSymbol>
        <LinkItem onClick={() => openUrl(urls.community)}>Community</LinkItem>
        <SpSymbol> / </SpSymbol>
        <LinkItem onClick={() => openUrl(urls.docs)}>Docs</LinkItem>
      </NavContainer>
      <ShareContainer>
        <ConnectTxt>Connect with us</ConnectTxt>
        <SocialImg src={twitterSvg} onClick={() => openUrl(urls.twitter)}></SocialImg>
        <SocialImg src={githubSvg} onClick={() => openUrl(urls.gitHub)}></SocialImg>
        <SocialImg src={smSvg} onClick={() => openUrl(urls.riot)}></SocialImg>
        <SocialImg src={mediumSvg} onClick={() => openUrl(urls.medium)}></SocialImg>
      </ShareContainer>
    </Container>
  );
};

export default Footer;