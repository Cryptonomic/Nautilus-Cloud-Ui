import React from 'react';
import Footer from '../../components/Footer';
import Typography from '@material-ui/core/Typography';
import {
    Container,
    WelcomeContainer,
    LogoItem,
    TitleItem,
    DescriptonItem,
    LoginGithubButtonItem,
    GithubButton,
    FooterItem
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

import TopBar from '../../components/TopBar';
import CustomIcon from '../../components/CustomIcon';
import logo from '../../assets/img/new/logo.svg';
import logoCryptonomic from '../../assets/img/new/cryptonomic-logo.png'
import Waves1x from '../../assets/img/new/waves-background.png';
import Waves2x from '../../assets/img/new/waves-background@2x.png';
import Waves3x from '../../assets/img/new/waves-background@3x.png';
import { Button, Grid } from '@material-ui/core';

const REDIRECT_URI = `${window.location.origin}/github-callback`;
const gitAuthUrl = `https://github.com/login/oauth/authorize?client_id=${config.clientId}&scope=user:email&redirect_uri=${REDIRECT_URI}`;

const App: React.FC<{}> = () => {
    function onGitLogin() {
        window.open(gitAuthUrl, '_self');
    }

    return (
        <>
            <Container>
                <TopBar />
                <WelcomeContainer container direction="column" alignItems="center" wrap="nowrap">
                    <LogoItem item zeroMinWidth>
                        <CustomIcon src={logo} size="4rem" name="welcome-logo" />
                    </LogoItem>
                    <TitleItem item>
                        <Typography variant="h1">Nautilus Cloud Beta</Typography>
                    </TitleItem>
                    <DescriptonItem item>
                        <Typography variant="h2">
                            A full suite of tools to develop and deploy blockchain applications
                        </Typography>
                    </DescriptonItem>
                    <LoginGithubButtonItem item>
                        <GithubButton>Log-in with Github</GithubButton>
                    </LoginGithubButtonItem>
                    <FooterItem item>
                      <Grid container alignContent="space-between" alignItems="center" spacing={4}>
                        <Grid item><Typography variant="caption">Brought to you by</Typography></Grid>
                        <Grid item><CustomIcon src={logoCryptonomic} name="logo-cryptonomic" /></Grid>
                      </Grid>
                    </FooterItem>
                </WelcomeContainer>
            </Container>
            {/* <picture>
        <img srcSet={`${Waves1x} 1x, ${Waves2x} 2x, ${Waves3x} 3x`} alt="test" />
    </picture> */}
            {/* <Container> */}
            {/* <HeaderContainer>
        <HeaderOval1 />
        <HeaderOval2 />
        <HeaderOval3 />
        <HeaderCover />
        <HeaderMain>
          <LogoImg src={logosvg} />
          <HeaderTitle>Nautilus <span>Cloud Beta</span></HeaderTitle>
          <HeaderDescription>A full suite of tools to develop and deploy Tezos applications</HeaderDescription>
        </HeaderMain>
      </HeaderContainer> */}
            {/* <MainContainer>
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
              Explore Tezos data with the <ContentDesHighlight>Arronax</ContentDesHighlight><br /> blockchain analytics tool
            </ContentDesTxt>
          </MainContentCol>
          <MainContentCol>
            <MainImg3 src={hostingGraphic} />
            <ContentTitleTxt>Cloud or self-hosted, you decide</ContentTitleTxt>
            <ContentDesTxt>
              Develop on the cloud with us now,<br /> <ContentDesHighlight>decentralize</ContentDesHighlight> in production
            </ContentDesTxt>
          </MainContentCol>
        </MainContent>
      </MainContainer>
      <MediumContainer>
        <MediumContent>
          <MediumTxtContainer>
            <MediumContentTxt>Cryptonomic has provided reliable Tezos <br />infrastructure since the Tezos launch</MediumContentTxt>
            <ExploreTxt>Explore products built on Nautilus Cloud <ChevGrImg src={chevGrSvg} /></ExploreTxt>
          </MediumTxtContainer>
          <AppImg src={appSvg} />
        </MediumContent>
      </MediumContainer>
      <BottomContainer>
        <HeaderOval1 />
        <HeaderOval2 />
        <BottomMainContainer>
          <BottomAccessContainer>
            <AccessTxt>Access Tezos network now</AccessTxt>
              <GithubBtn onClick={onGitLogin}>
                <GithubImg src={githubSvg} />
                Login with Github
                <ChevImg src={chevSvg} />
              </GithubBtn>
          </BottomAccessContainer>
          <SpLine />
          <Footer />
        </BottomMainContainer>
      </BottomContainer> */}
            {/* </Container> */}
        </>
    );
};

export default App;
