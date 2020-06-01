import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Main,
    TitleText,
    Title,
    Details,
    Resources,
    DetailsBg,
    CustomSelect,
    CustomInput,
    LinkText,
    ApiKeyText,
    LinkBox,
    ResourcesLinksContainer,
    ResourcesLinks,
    ResourcesLinkItem,
} from './style';
import config from '../../config';
import { User } from '../../types';

import TopBar from '../../components/TopBar';
import CustomImg from '../../components/CustomImg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import bookIcon from '../../assets/img/new/book-icon.svg';
import programmingIcon from '../../assets/img/new/js-programming.svg';
import scriptIcon from '../../assets/img/new/script-code-coding.svg';
import copyIcon from '../../assets/img/new/copy-icon.svg';
import refreshIcon from '../../assets/img/new/refresh.svg';

import SideBar from '../../components/SideBar';
import { copyTxt } from '../../utils/general';

const drawerWidth = 120;
const { handbook, conseil, conseiljs } = config;

const mainUrls = {
    prod: {
        conseil: 'https://conseil-prod.cryptonomic-infra.tech:443',
        tezos: 'https://tezos-prod.cryptonomic-infra.tech:443',
    },
    dev: {
        conseil: 'https://conseil-dev.cryptonomic-infra.tech:443',
        tezos: 'https://tezos-dev.cryptonomic-infra.tech:443',
    },
};

const Home: React.FC<RouteComponentProps> = (props) => {
    const { history } = props;
    const [apiKeys, setApiKeys] = useState([]);
    const [selectedKey, setSelectedKey] = useState(0);
    const userStringInfo = localStorage.getItem('userInfo');
    let userInfo: User = { userEmail: '' };
    if (userStringInfo) {
        userInfo = JSON.parse(userStringInfo);
    }

    // console.log('USER', userInfo)

    async function getKeys() {
        try {
            const response = await axios.get(`${config.url}/users/me/apiKeys`, {
                withCredentials: true,
            });
            if (!!response.data && response.data.length > 1) {
                setApiKeys(response.data.slice().sort((a, b) => (a.env > b.env ? 1 : -1)));
            } else {
                onLogout();
            }
        } catch (error) {
            console.error('errr', error);
            onLogout();
        }
    }

    async function refreshKeys(env, index) {
        try {
            const newKey = await axios.post(
                `${config.url}/users/me/apiKeys/${env}/refresh`,
                {},
                { withCredentials: true }
            );
            apiKeys[index] = newKey.data;
            setApiKeys([...apiKeys]);
        } catch (error) {
            console.error('errr', error);
        }
    }

    useEffect(() => {
        getKeys();
    }, [userInfo.userId]);

    function onLogout() {
        localStorage.removeItem('userInfo');
        history.push('/');
    }

    function openUrl(url) {
        if (url) window.open(url, '_blank');
    }

    function getItemName(name) {
        return name === 'prod' ? 'Mainnet' : 'Carthagenet';
    }

    function onChangeEndpoints(event) {
        setSelectedKey(event.target.value);
    }

    return (
        <Container>
            <TopBar drawer={drawerWidth} userEmail={userInfo.userEmail}/>
            <SideBar width={drawerWidth} />
            <Main container justify="center" direction="column">
                <Title item>
                    <TitleText variant="h5">Tezos</TitleText>
                </Title>
                {apiKeys.length && (
                    <Details item>
                        <DetailsBg>
                            <Grid container direction="column" justify="center" spacing={3}>
                                <Grid item>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Endpoints</Typography>
                                        </Grid>
                                        <Grid item>
                                            <CustomSelect
                                                value={selectedKey}
                                                onChange={onChangeEndpoints}
                                                name="endpoints"
                                                input={
                                                    <CustomInput
                                                        inputProps={{ 'aria-label': 'naked' }}
                                                    />
                                                }
                                                inputProps={{ 'aria-label': 'endpoints' }}
                                                IconComponent={ExpandMoreIcon}
                                            >
                                                {apiKeys.map((item, index) => (
                                                    <option value={index} key={item.environment}>
                                                        {getItemName(item.environment)}
                                                    </option>
                                                ))}
                                            </CustomSelect>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        {`Tezos ${getItemName(
                                            apiKeys[selectedKey].environment
                                        )} Node`}
                                    </Typography>
                                    <Grid container alignItems="center">
                                        <LinkText>
                                            {mainUrls[apiKeys[selectedKey].environment].tezos}
                                        </LinkText>
                                        <CustomImg
                                            src={copyIcon}
                                            size="0.9375rem"
                                            margin="0 auto 0 10px"
                                            name="copy-icon"
                                            onClick={() =>
                                                copyTxt(
                                                    mainUrls[apiKeys[selectedKey].environment].tezos
                                                )
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        {`Conseil ${getItemName(
                                            apiKeys[selectedKey].environment
                                        )} Node`}
                                    </Typography>
                                    <Grid container alignItems="center">
                                        <LinkText>
                                            {mainUrls[apiKeys[selectedKey].environment].conseil}
                                        </LinkText>
                                        <CustomImg
                                            src={copyIcon}
                                            size="0.9375rem"
                                            margin="0 auto 0 10px"
                                            name="copy-icon"
                                            onClick={() =>
                                                copyTxt(
                                                    mainUrls[apiKeys[selectedKey].environment]
                                                        .conseil
                                                )
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        API Key
                                    </Typography>
                                    <LinkBox container alignItems="center">
                                        <ApiKeyText>{apiKeys[selectedKey].key}</ApiKeyText>
                                        <CustomImg
                                            src={copyIcon}
                                            size="0.9375rem"
                                            margin="0 0 0 auto"
                                            name="copy-icon"
                                            onClick={() => copyTxt(apiKeys[selectedKey].key)}
                                        />
                                        <CustomImg
                                            src={refreshIcon}
                                            size="0.9375rem"
                                            margin="0 0 0 auto"
                                            name="refresh-icon"
                                            onClick={() =>
                                                refreshKeys(
                                                    apiKeys[selectedKey].environment,
                                                    selectedKey
                                                )
                                            }
                                        />
                                    </LinkBox>
                                </Grid>
                            </Grid>
                        </DetailsBg>
                    </Details>
                )}
                <Resources item>
                    <Typography variant="h5">Resources to get Started</Typography>
                    <ResourcesLinksContainer container alignItems="center" spacing={3}>
                        <ResourcesLinkItem item onClick={() => openUrl(conseil)}>
                            <CustomImg src={bookIcon} size="4.5rem" name="book-icon" />
                            <ResourcesLinks variant="subtitle1">
                                Tezos Developers' Handbook
                            </ResourcesLinks>
                        </ResourcesLinkItem>
                        <ResourcesLinkItem item onClick={() => openUrl(handbook)}>
                            <CustomImg src={scriptIcon} size="4.5rem" name="script-icon" />
                            <ResourcesLinks variant="subtitle1">
                                Conseil Documentation
                            </ResourcesLinks>
                        </ResourcesLinkItem>
                        <ResourcesLinkItem item onClick={() => openUrl(conseiljs)}>
                            <CustomImg
                                src={programmingIcon}
                                size="4.5rem"
                                name="programming-icon"
                            />
                            <ResourcesLinks variant="subtitle1">
                                Conseil.JS Documentation
                            </ResourcesLinks>
                        </ResourcesLinkItem>
                    </ResourcesLinksContainer>
                </Resources>
            </Main>
        </Container>
    );
};

export default withRouter(Home);
