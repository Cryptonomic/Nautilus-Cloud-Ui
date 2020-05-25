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
    FooterItem,
    DevelopmentContainer,
    CreateApiButton,
    ToolsContainer,
    FooterContainer,
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
import dataIcon from '../../assets/img/new/data-icon.svg';
import apiIcon from '../../assets/img/new/api-icon.svg';
import conseilApiIcon from '../../assets/img/new/conseil-api-graphic.svg';
import frontendIcon from '../../assets/img/new/frontend-icon.svg';
import apiMasteringIcon from '../../assets/img/new/api-metering-icon.svg';
import conseilJsPicture from '../../assets/img/new/conseil-js-graphic.png';
import userToolArronaxImg from '../../assets/img/new/user-tools-arronax.png';
import userToolGalleonImg from '../../assets/img/new/user-tools-galleon.png';
import logoCryptonomic from '../../assets/img/new/cryptonomic-logo.png';
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
                        <Grid
                            container
                            alignContent="space-between"
                            alignItems="center"
                            spacing={4}
                        >
                            <Grid item>
                                <Typography variant="caption">Brought to you by</Typography>
                            </Grid>
                            <Grid item>
                                <CustomIcon src={logoCryptonomic} name="logo-cryptonomic" />
                            </Grid>
                        </Grid>
                    </FooterItem>
                </WelcomeContainer>
                <DevelopmentContainer
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                >
                    <Grid item xs={12}>
                        <CustomIcon src={dataIcon} size="7.5rem" name="data-icon" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" component="div" align="center">
                            Integrated Development Infrastructure
                        </Typography>
                        <Typography variant="body1" component="div" align="center">
                            Nautilus Cloud makes using blockchain and indexer nodes easier by
                            providing cloud hosted Tezos and Conseil nodes. We provide
                            infrastructure with rich queryable data so that you can get started
                            quickly and focus on building out your ideas.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="column" wrap="nowrap">
                            <Grid item>
                                <CustomIcon src={apiIcon} size="6.25rem" name="api-icon" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h2">Conseil API</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    Conseil is our open-source blockchain indexer written in Scala.
                                    Not only does it provide blockchain data using REST but it also
                                    offers metadata to help identify and pull the data you need.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" align="left">
                                    View Documentation
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomIcon src={conseilApiIcon} size="34.375rem" name="conseil-api-icon" />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomIcon src={conseilJsPicture} name="conseil-js-picture" />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item>
                            <CustomIcon src={frontendIcon} size="5.9375rem" name="frontend-icon" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">Conseil.JS </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Conseil.js is our open-source client side library written in
                                TypeScript. It wraps RESTful Conseil calls into easy-to-use
                                functions that allow developers to read from and write to the Tezos
                                blockchain.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" align="left">
                                View Documentation
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomIcon src={apiMasteringIcon} size="5.3125rem" name="data-icon" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" component="div" align="center">
                            API Metering
                        </Typography>
                        <Typography variant="body1" component="div" align="center">
                            Once you start making requests, our API stats dashboard can show you
                            insights about API usage and performance.
                        </Typography>
                    </Grid>
                    <Grid container justify="center">
                        <CreateApiButton>Create API keys</CreateApiButton>
                    </Grid>
                </DevelopmentContainer>
                <ToolsContainer container direction="row" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h2" component="div" align="center">
                            User Tools Built on Nautilus Cloud
                        </Typography>
                    </Grid>
                    <Grid container xs={6} direction="column" wrap="nowrap">
                        <Grid item xs={12}>
                            <CustomIcon src={userToolArronaxImg} name="user-tool-arronax" />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" align="center">
                                Arronax
                            </Typography>
                            <Typography variant="body1" align="center" component="div">
                                Arronax is a blockchain analytics tool that uses Conseil as its data
                                source. Run sophisticated queries and generate reports tailored to
                                your specific needs.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={6} direction="column" wrap="nowrap">
                        <Grid item xs={12}>
                            <CustomIcon src={userToolGalleonImg} name="user-tool-galleon" />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" align="center" component="div">
                                Galleon
                            </Typography>
                            <Typography variant="body1" align="center" component="div">
                                Galleon is our Tezos wallet. It provides a useful interface for
                                developers to test the invocation and deployment of smart contracts.{' '}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center">
                            Explore all User Tools
                        </Typography>
                    </Grid>
                </ToolsContainer>
                <FooterContainer>
                    <Typography variant="h2" align="center" component="div">
                        A Note on Decenteralization
                    </Typography>
                    <Typography variant="body1" align="center" component="p">
                        Cryptonomic is committed to decentralization and disintermediation. With our
                        upcoming Nautilus Core project, you will be able to deploy on your own
                        production infrastructure. All back-end components for running our services
                        are open source and thoroughly documented.
                    </Typography>
                    <div style={{ width: '100%', height: "1px", backgroundColor: 'red', margin: '0 0 45px 0' }}></div>
                    <Grid container direction='row'>
                      <Grid item xs={3}>© 2020 Nautilus Cloud</Grid>
                      <Grid item xs={3}>icons</Grid>
                      <Grid item xs={3}>Terms of Service</Grid>
                      <Grid item xs={3}>Privacy Policy</Grid>
                    </Grid>
                </FooterContainer>
            </Container>
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
