import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
    Container,
    WelcomeContainer,
    WelcomeLogoItem,
    WelcomeTitleItem,
    WelcomeDescriptonItem,
    WelcomeLoginGithubButtonItem,
    WelcomeGithubButton,
    WelcomeFooterItem,
    WelcomeBg,
    WelcomeWrapper,
    DevelopmentContainer,
    DevelopmentLogoItem,
    DevelopmentTitleItem,
    DevelopmentSectionItem,
    DevelopmentSectionIconWrapper,
    DevelopmentSectionTitleItem,
    DevelopmentSectionDescriptionItem,
    DevelopmentSectionLinkItem,
    DevelopmentApiMeteringDesctiprion,
    LinkItem,
    CreateApiButtonContainter,
    CreateApiButton,
    ToolsContainer,
    ToolsTitle,
    ToolsLink,
    FooterContainer,
    FooterTitle,
    FooterLine,
    FooterList,
    FooterLink,
} from './style';

import TopBar from '../../components/TopBar';
import CustomImg from '../../components/CustomImg';
import CustomIcon from '../../components/CustomIcon';
import { ReactComponent as Logo } from '../../assets/img/new/logo.svg';
import { ReactComponent as DataIcon } from '../../assets/img/new/data-icon.svg';
import { ReactComponent as ApiIcon } from '../../assets/img/new/api-icon.svg';
import { ReactComponent as FrontendIcon } from '../../assets/img/new/frontend-icon.svg';
import { ReactComponent as ApiMasteringIcon } from '../../assets/img/new/api-metering-icon.svg';
import conseilApiPicture1 from '../../assets/img/new/conseil-api-graphic.png';
import conseilApiPicture2 from '../../assets/img/new/conseil-api-graphic@2x.png';
import conseilApiPicture3 from '../../assets/img/new/conseil-api-graphic@3x.png';
import conseilJsPicture1 from '../../assets/img/new/conseil-js-graphic.png';
import conseilJsPicture2 from '../../assets/img/new/conseil-js-graphic@2x.png';
import conseilJsPicture3 from '../../assets/img/new/conseil-js-graphic@3x.png';
import userToolArronaxPicture1 from '../../assets/img/new/user-tools-arronax.png';
import userToolArronaxPicture2 from '../../assets/img/new/user-tools-arronax@2x.png';
import userToolArronaxPicture3 from '../../assets/img/new/user-tools-arronax@3x.png';
import userToolGalleonPicture1 from '../../assets/img/new/user-tools-galleon.png';
import userToolGalleonPicture2 from '../../assets/img/new/user-tools-galleon@2x.png';
import userToolGalleonPicture3 from '../../assets/img/new/user-tools-galleon@3x.png';
import logoCryptonomic1 from '../../assets/img/new/cryptonomic-logo.png';
import logoCryptonomic2 from '../../assets/img/new/cryptonomic-logo@2x.png';
import logoCryptonomic3 from '../../assets/img/new/cryptonomic-logo@3x.png';
import Waves1x from '../../assets/img/new/waves-background.png';
import Waves2x from '../../assets/img/new/waves-background@2x.png';
import Waves3x from '../../assets/img/new/waves-background@3x.png';
import BgPath1 from '../../assets/img/new/path-3.png';
import BgPath2 from '../../assets/img/new/path-3@2x.png';
import BgPath3 from '../../assets/img/new/path-3@3x.png';
import GithubIcon from '../../assets/img/new/sm_github_icon.svg';
import RiotIcon from '../../assets/img/new/sm_riot_icon.svg';
import TwitterIcon from '../../assets/img/new/sm_twitter_icon.svg';
import MediumIcon from '../../assets/img/new/sm_medium_icon.svg';

import config from '../../config';
const { terms, twitter, gitHub, riot, medium, conseil, conseiljs, userTools } = config;

const REDIRECT_URI = `${window.location.origin}/github-callback`;
const gitAuthUrl = `https://github.com/login/oauth/authorize?client_id=${config.clientId}&scope=user:email&redirect_uri=${REDIRECT_URI}`;

const App = () => {
    const onGitLogin = () => window.open(gitAuthUrl, '_self');
    const openUrl = (url: string) => window.open(url, '_blank');

    return (
        <Container>
            <TopBar onLogin={onGitLogin} />
            {/* Welcome section */}
            <WelcomeContainer container direction="column" alignItems="center" wrap="nowrap">
                <WelcomeBg>
                    <CustomImg src={[Waves1x, Waves2x, Waves3x]} name="background-bottom" />
                </WelcomeBg>
                <WelcomeBg>
                    <CustomImg src={[BgPath1, BgPath2, BgPath3]} name="background-top" />
                </WelcomeBg>
                <WelcomeWrapper container direction="column" alignItems="center" wrap="nowrap">
                    <WelcomeLogoItem item>
                        <CustomIcon Component={Logo} size="4rem" />
                    </WelcomeLogoItem>
                    <WelcomeTitleItem item>
                        <Typography variant="h1" align="center">
                            Nautilus Cloud Beta
                        </Typography>
                    </WelcomeTitleItem>
                    <WelcomeDescriptonItem item>
                        <Typography variant="h2" align="center">
                            A full suite of tools to develop and deploy blockchain applications
                        </Typography>
                    </WelcomeDescriptonItem>
                    <WelcomeLoginGithubButtonItem item>
                        <WelcomeGithubButton onClick={onGitLogin}>
                            Log-in with Github
                        </WelcomeGithubButton>
                    </WelcomeLoginGithubButtonItem>
                    <WelcomeFooterItem item>
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
                                <CustomImg
                                    src={[logoCryptonomic1, logoCryptonomic2, logoCryptonomic3]}
                                    name="logo-cryptonomic"
                                />
                            </Grid>
                        </Grid>
                    </WelcomeFooterItem>
                </WelcomeWrapper>
            </WelcomeContainer>
            {/* Development section */}
            <DevelopmentContainer
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
            >
                <DevelopmentLogoItem item xs={12}>
                    <Grid container justify="center" alignItems="center">
                        <CustomIcon Component={DataIcon} size="7.5rem" />
                    </Grid>
                </DevelopmentLogoItem>
                <DevelopmentTitleItem item xs={12}>
                    <Typography variant="h3" component="div" align="center">
                        Integrated Development Infrastructure
                    </Typography>
                    <Typography variant="body1" component="div" align="center">
                        Nautilus Cloud makes using blockchain and indexer nodes easier by providing
                        cloud hosted Tezos and Conseil nodes. We provide infrastructure with rich
                        queryable data so that you can get started quickly and focus on building out
                        your ideas.
                    </Typography>
                </DevelopmentTitleItem>
                <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={10}>
                        <DevelopmentSectionItem item xs={6}>
                            <Grid container direction="column" wrap="nowrap">
                                <DevelopmentSectionTitleItem item>
                                    <DevelopmentSectionIconWrapper
                                        container
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <CustomIcon Component={ApiIcon} size="6.25rem" />
                                    </DevelopmentSectionIconWrapper>
                                    <Typography variant="h3">Conseil API</Typography>
                                </DevelopmentSectionTitleItem>
                                <DevelopmentSectionDescriptionItem item>
                                    <Typography variant="body1">
                                        Conseil is our open-source blockchain indexer written in
                                        Scala. Not only does it provide blockchain data using REST
                                        but it also offers metadata to help identify and pull the
                                        data you need.
                                    </Typography>
                                </DevelopmentSectionDescriptionItem>
                                <DevelopmentSectionLinkItem item>
                                    <LinkItem
                                        variant="overline"
                                        align="left"
                                        onClick={() => openUrl(conseil)}
                                    >
                                        View Documentation
                                    </LinkItem>
                                </DevelopmentSectionLinkItem>
                            </Grid>
                        </DevelopmentSectionItem>
                        <DevelopmentSectionItem item xs={6}>
                            <Grid container direction="column">
                                <CustomImg
                                    src={[
                                        conseilApiPicture1,
                                        conseilApiPicture2,
                                        conseilApiPicture3,
                                    ]}
                                    maxwidth="550px"
                                    name="conseil-api-icon"
                                />
                            </Grid>
                        </DevelopmentSectionItem>
                        <DevelopmentSectionItem item xs={6}>
                            <CustomImg
                                src={[conseilJsPicture1, conseilJsPicture2, conseilJsPicture3]}
                                maxwidth="516px"
                                name="conseil-js-picture"
                            />
                        </DevelopmentSectionItem>
                        <DevelopmentSectionItem item xs={6}>
                            <Grid container direction="column" wrap="nowrap">
                                <DevelopmentSectionTitleItem item>
                                    <DevelopmentSectionIconWrapper
                                        container
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <CustomIcon Component={FrontendIcon} size="5.9375rem" />
                                    </DevelopmentSectionIconWrapper>
                                    <Typography variant="h3">Conseil.JS </Typography>
                                </DevelopmentSectionTitleItem>
                                <DevelopmentSectionDescriptionItem item>
                                    <Typography variant="body1">
                                        Conseil.js is our open-source client side library written in
                                        TypeScript. It wraps RESTful Conseil calls into easy-to-use
                                        functions that allow developers to read from and write to
                                        the Tezos blockchain.
                                    </Typography>
                                </DevelopmentSectionDescriptionItem>
                                <DevelopmentSectionLinkItem item>
                                    <LinkItem
                                        variant="overline"
                                        align="left"
                                        onClick={() => openUrl(conseiljs)}
                                    >
                                        View Documentation
                                    </LinkItem>
                                </DevelopmentSectionLinkItem>
                            </Grid>
                        </DevelopmentSectionItem>
                    </Grid>
                </Grid>
                <DevelopmentSectionItem item xs={12}>
                    <DevelopmentSectionIconWrapper container justify="center" alignItems="center">
                        <CustomIcon Component={ApiMasteringIcon} size="5.3125rem" />
                    </DevelopmentSectionIconWrapper>
                    <Typography variant="h3" component="div" align="center">
                        API Metering
                    </Typography>
                </DevelopmentSectionItem>
                <DevelopmentApiMeteringDesctiprion item xs={12}>
                    <Typography variant="body1" component="div" align="center">
                        Once you start making requests, our API stats dashboard can show you
                        insights about API usage and performance.
                    </Typography>
                </DevelopmentApiMeteringDesctiprion>
                <CreateApiButtonContainter container justify="center">
                    <CreateApiButton>Create API keys</CreateApiButton>
                </CreateApiButtonContainter>
            </DevelopmentContainer>
            {/* Tools section */}
            <ToolsContainer container direction="row" spacing={10}>
                <ToolsTitle item xs={12}>
                    <Typography variant="h3" component="div" align="center">
                        User Tools Built on Nautilus Cloud
                    </Typography>
                </ToolsTitle>
                <Grid item xs={6}>
                    <Grid container alignItems="center">
                        <CustomImg
                            src={[
                                userToolArronaxPicture1,
                                userToolArronaxPicture2,
                                userToolArronaxPicture3,
                            ]}
                            maxwidth="351px"
                            name="user-tool-arronax"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <CustomImg
                        src={[
                            userToolGalleonPicture1,
                            userToolGalleonPicture2,
                            userToolGalleonPicture3,
                        ]}
                        maxwidth="354px"
                        name="user-tool-galleon"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" align="center">
                        Arronax
                    </Typography>
                    <Typography variant="body1" align="center" component="div">
                        Arronax is a blockchain analytics tool that uses Conseil as its data source.
                        Run sophisticated queries and generate reports tailored to your specific
                        needs.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" align="center" component="div">
                        Galleon
                    </Typography>
                    <Typography variant="body1" align="center" component="div">
                        Galleon is our Tezos wallet. It provides a useful interface for developers
                        to test the invocation and deployment of smart contracts.
                    </Typography>
                </Grid>
                <ToolsLink container justify="center">
                    <LinkItem variant="overline" align="center" onClick={() => openUrl(userTools)}>
                        Explore all User Tools
                    </LinkItem>
                </ToolsLink>
            </ToolsContainer>
            {/* Footer section */}
            <FooterContainer container justify="center">
                <FooterTitle item>
                    <Typography variant="h3" align="center" component="div">
                        A Note on Decenteralization
                    </Typography>
                    <Typography variant="body1" align="center" component="p">
                        Cryptonomic is committed to decentralization and disintermediation. With our
                        upcoming Nautilus Core project, you will be able to deploy on your own
                        production infrastructure. All back-end components for running our services
                        are open source and thoroughly documented.
                    </Typography>
                </FooterTitle>
                <FooterLine />
                <FooterList container direction="row" alignItems="center">
                    <Grid item xs={2}>
                        <Typography variant="subtitle2">© 2020 Nautilus Cloud</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid container>
                            <FooterLink onClick={() => openUrl(twitter)}>
                                <CustomImg src={TwitterIcon} size="1rem" name="twitter-icon" />
                            </FooterLink>
                            <FooterLink onClick={() => openUrl(gitHub)}>
                                <CustomImg src={GithubIcon} size="1rem" name="github-icon" />
                            </FooterLink>
                            <FooterLink onClick={() => openUrl(riot)}>
                                <CustomImg src={RiotIcon} size="1rem" name="riot-icon" />
                            </FooterLink>
                            <FooterLink onClick={() => openUrl(medium)}>
                                <CustomImg src={MediumIcon} size="1rem" name="medium-icon" />
                            </FooterLink>
                        </Grid>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="subtitle2" align="right">
                            <FooterLink onClick={() => openUrl(terms)}>Terms of Service</FooterLink>
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography
                            variant="subtitle2"
                            align="right"
                            onClick={() => openUrl(terms)}
                        >
                            <FooterLink onClick={() => openUrl(terms)}>Privacy Policy</FooterLink>
                        </Typography>
                    </Grid>
                </FooterList>
            </FooterContainer>
        </Container>
    );
};

export default App;
