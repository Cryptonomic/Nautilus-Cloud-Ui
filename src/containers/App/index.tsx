import React from 'react';
import Footer from '../../components/Footer';
import {
  Container, HeaderContainer, MainContainer, MediumContainer, BottomContainer,
  HeaderOval1, HeaderOval2, HeaderOval3, HeaderCover, HeaderMain, LogoImg,
  HeaderTitle, HeaderDescription, AccessContainer, AccessTxt, GithubBtn, GithubImg,
  ChevImg, AccessMainContainer, MainContent, MainContentCol, ContentTitleTxt, ContentDesTxt,
  ContentDesHighlight, MainImg1, MainImg2, MainImg3, MediumContent, AppImg, MediumTxtContainer,
  MediumContentTxt, ExploreTxt, ChevGrImg, BottomAccessContainer, BottomMainContainer, SpLine
} from './style';
import config from '../../config';
import logosvg from '../../assets/img/logo-light.svg';
import githubSvg from '../../assets/img/github.svg';
import chevSvg from '../../assets/img/chev-right.svg';
import apiGraphic from '../../assets/img/api_graphic.png';
import hostingGraphic from '../../assets/img/hosting_graphic.png';
import tezosdataGraphic from '../../assets/img/tezosdata_graphic.png';
import appSvg from '../../assets/img/tezos-app.svg';
import chevGrSvg from '../../assets/img/chev-green-icon.svg';


const REDIRECT_URI = `${window.location.origin}/github-callback`;
const gitAuthUrl = `https://github.com/login/oauth/authorize?client_id=${config.clientId}&scope=user&redirect_uri=${REDIRECT_URI}`;

const App: React.FC<{}> = () => {
  function onGitLogin() {
    window.open(gitAuthUrl, '_self');
  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderOval1 />
        <HeaderOval2 />
        <HeaderOval3 />
        <HeaderCover />
        <HeaderMain>
          <LogoImg src={logosvg} />
          <HeaderTitle>Nautilus <span>Cloud</span></HeaderTitle>
          <HeaderDescription>Full suite of tools to develop and deploy decentralized applications on Tezos</HeaderDescription>
        </HeaderMain>
      </HeaderContainer>
      <MainContainer>
        <AccessContainer>
          <AccessMainContainer>
            <AccessTxt>Access Tezos network now</AccessTxt>
            <GithubBtn onClick={onGitLogin}>
              <GithubImg src={githubSvg} />
              Login with Github
              <ChevImg src={chevSvg} />
            </GithubBtn>
          </AccessMainContainer>
        </AccessContainer>
        <MainContent>
          <MainContentCol>
            <MainImg1 src={apiGraphic} />
            <ContentTitleTxt>Powerful APIs</ContentTitleTxt>
            <ContentDesTxt>
              Use Conseil’s <ContentDesHighlight>enhanced API layer</ContentDesHighlight> on Tezos <br /> to build data-rich decentralized applications
            </ContentDesTxt>
          </MainContentCol>
          <MainContentCol>
            <MainImg2 src={tezosdataGraphic} />
            <ContentTitleTxt>Tezos data at your fingertips</ContentTitleTxt>
            <ContentDesTxt>
              Explore Tezos data with <ContentDesHighlight>Arronax</ContentDesHighlight><br /> blockchain analytics tool
            </ContentDesTxt>
          </MainContentCol>
          <MainContentCol>
            <MainImg3 src={hostingGraphic} />
            <ContentTitleTxt>Cloud or self-hosted, you decide</ContentTitleTxt>
            <ContentDesTxt>
              Develop on cloud with us now,<br /> <ContentDesHighlight>deploy on dedicated instances</ContentDesHighlight> for production
            </ContentDesTxt>
          </MainContentCol>
        </MainContent>
      </MainContainer>
      <MediumContainer>
        <MediumContent>
          <MediumTxtContainer>
            <MediumContentTxt>We have provided reliable Tezos infrastructure<br />from the launch of the network in 2018</MediumContentTxt>
            <ExploreTxt>Explore products build on Nautilus Cloud <ChevGrImg src={chevGrSvg} /></ExploreTxt>
          </MediumTxtContainer>
          <AppImg src={appSvg} />
        </MediumContent>
      </MediumContainer>
      <BottomContainer>
        <HeaderOval1 />
        <HeaderOval2 />
        <BottomMainContainer>
          <BottomAccessContainer>
            <AccessTxt>Start developing on Tezos</AccessTxt>
              <GithubBtn onClick={onGitLogin}>
                <GithubImg src={githubSvg} />
                Login with Github
                <ChevImg src={chevSvg} />
              </GithubBtn>
          </BottomAccessContainer>
          <SpLine />
          <Footer />
        </BottomMainContainer>
      </BottomContainer>
    </Container>
  );
};

export default App;