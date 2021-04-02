import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { IAppState, IToken } from '../../models';
import {
    Main,
    TitleText,
    Title,
    Details,
    Resources,
    DetailsBg,
    CustomSelect,
    CustomInput,
    CustomMenuItem,
    CustomMenuProps,
    LinkText,
    ApiKeyText,
    LinkBox,
    EndopointsSelectContainer,
    ResourcesLinksContainer,
    ResourcesLinks,
    ResourcesLinkItem,
    Modal,
    ModalDivider,
    ModalTitle,
    ModalContent,
    ModalAskText,
    ModalInfoText,
    ModalActionsWrapper,
    ModalButtonAccept,
    ModalButtonCancel,
    TabWrapper,
    TabsWrapper,
    TabContainer,
    SubTitle,
    CopyText,
    GenerateKeyButton,
    TabContent,
    TestnetInfo,
    Hint,
} from './style';
import Request from '../../components/Request';
import Subscription from '../../components/Subscription';
import config from '../../config';

import CustomImg from '../../components/CustomImg';
import CopyButton from '../../components/CopyButton';
import bookIcon from '../../assets/img/book-icon.svg';
import programmingIcon from '../../assets/img/js-programming.svg';
import scriptIcon from '../../assets/img/script-code-coding.svg';
import http, { rebuildHttp } from '../../utils/httpService';

import { createSubscription, getAllSubscriptions } from '../../reducers/app/thunks';
import { setAccountActiveTab, setSubscriptions } from '../../reducers/app/actions';

import { AppState } from '../../types';
import { PaymentSubscriptionStatus } from '../../reducers/app/types';

import { displayTimestamp } from '../../utils/renders';

import Stats from './Stats';

const {
    handbook,
    conseil,
    conseiljs,
    prodName,
    devName,
    devInfo,
    prodConseil,
    prodTezos,
    devConseil,
    devTezos,
    devEdoConseil,
    devEdoTezos,
} = config;

const mainUrls = {
    prod: {
        conseil: [prodConseil],
        tezos: [prodTezos],
    },
    dev: {
        conseil: [devEdoConseil],
        tezos: [devEdoTezos],
    },
    // dev: {
    //   conseil: [devConseil, devEdoConseil],
    //   tezos: [devTezos, devEdoTezos],
    // },
};

const Keys = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const activePlan = useSelector((state: AppState) => state.payment.activePlan);
    const subscryptionPro = useSelector((state: AppState) => state.payment.subscriptionPro);
    const { onLogout, userInfo } = props;
    const [apiKeys, setApiKeys] = useState([]);
    const [selectedKey, setSelectedKey] = useState(0);
    const [open, setOpen] = useState(false);
    const [tabID, setTabID] = React.useState<number>(0);

    const onTabIDChanged = (event, newValue) => {
        setTabID(newValue);
    };
    async function getKeys() {
        rebuildHttp();
        try {
            const response = await http.get(`${config.url}/users/me/apiKeys`, {
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
        setOpen(false);
        rebuildHttp();
        try {
            const newKey = await http.post(
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

    const onUpgrade = async () => {
        if (subscryptionPro && subscryptionPro.status === PaymentSubscriptionStatus.CREATED) {
            dispatch(setAccountActiveTab(1));
            history.push('/home/account');
            return;
        }

        await createSubscription();
        dispatch(setAccountActiveTab(1));
        const [subs, subsMap, subPro] = await getAllSubscriptions();
        dispatch(setSubscriptions(subs, subsMap, subPro));
        history.push('/home/account');
    };

    const onRenew = () => {
        dispatch(setAccountActiveTab(1));
        history.push('/home/account');
    };

    useEffect(() => {
        getKeys();
    }, [userInfo.userId]);

    function openUrl(url) {
        if (url) window.open(url, '_blank');
    }

    function getItemName(name) {
        return name === 'prod' ? prodName : devName;
    }

    function onChangeEndpoints(event) {
        setSelectedKey(event.target.value);
    }

    function onClose() {
        setOpen(false);
    }

    return (
        <>
            <Main container justify="center" direction="column">
                <Title item>
                    <TitleText>Tezos Dashboard</TitleText>
                </Title>
                <TabContainer>
                    <TabsWrapper value={tabID} onChange={onTabIDChanged} aria-label="tezos tabs">
                        <TabWrapper label="API" id="tezos-tab-0" aria-controls="tezos-tabpanel-0" />
                        <TabWrapper
                            label="Metering Stats"
                            id="tezos-tab-1"
                            aria-controls="tezos-tabpanel-1"
                        />
                    </TabsWrapper>
                </TabContainer>
                {apiKeys.length > 0 && (
                    <TabContent
                        role="tabpanel"
                        hidden={tabID !== 0}
                        id="tezos-tabpanel-0"
                        aria-labelledby="tezos-tab-0"
                    >
                        <Details container spacing={4}>
                            <Grid item>
                                <SubTitle style={{ marginBottom: '12px' }}>API Keys</SubTitle>
                                <DetailsBg elevation={0}>
                                    <Grid container direction="column" justify="center" spacing={3}>
                                        <Grid item>
                                            <Grid container alignItems="center">
                                                <Grid item>
                                                    <SubTitle>Endpoints</SubTitle>
                                                </Grid>
                                                <EndopointsSelectContainer item>
                                                    <CustomSelect
                                                        value={selectedKey}
                                                        onChange={onChangeEndpoints}
                                                        name="endpoints"
                                                        MenuProps={CustomMenuProps}
                                                        input={
                                                            <CustomInput
                                                                inputProps={{
                                                                    'aria-label': 'naked',
                                                                }}
                                                            />
                                                        }
                                                        inputProps={{ 'aria-label': 'endpoints' }}
                                                        IconComponent={ExpandMoreIcon}
                                                    >
                                                        {apiKeys.map((item, index) => (
                                                            <CustomMenuItem
                                                                value={index}
                                                                key={item.environment}
                                                            >
                                                                {getItemName(item.environment)}
                                                            </CustomMenuItem>
                                                        ))}
                                                    </CustomSelect>
                                                </EndopointsSelectContainer>
                                                {apiKeys[selectedKey].environment === 'dev' && (
                                                    <Grid item>
                                                        <TestnetInfo>{devInfo}</TestnetInfo>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <SubTitle>
                                                {`Tezos ${getItemName(
                                                    apiKeys[selectedKey].environment
                                                )} Node`}
                                            </SubTitle>
                                            {mainUrls[apiKeys[selectedKey].environment].tezos.map(
                                                (url, index) => (
                                                    <Grid
                                                        container
                                                        alignItems="center"
                                                        key={`parent_${index}`}
                                                    >
                                                        <LinkText>{url}</LinkText>
                                                        <CopyButton txt={url} />
                                                        {/* {apiKeys[selectedKey].environment === "dev" && (
                              <Typography>
                                {url.includes("edo")
                                  ? "(Edo2net)"
                                  : "(Delphinet)"}
                              </Typography>
                            )} */}
                                                    </Grid>
                                                )
                                            )}
                                        </Grid>

                                        <Grid item>
                                            <SubTitle>
                                                {`Conseil ${getItemName(
                                                    apiKeys[selectedKey].environment
                                                )} Node`}
                                            </SubTitle>
                                            {mainUrls[apiKeys[selectedKey].environment].conseil.map(
                                                (url, index) => (
                                                    <Grid
                                                        container
                                                        alignItems="center"
                                                        key={`parent_${index}`}
                                                    >
                                                        <LinkText>{url}</LinkText>
                                                        <CopyButton txt={url} />
                                                        {/* {apiKeys[selectedKey].environment === "dev" && (
                              <Typography>
                                {url.includes("edo")
                                  ? "(Edo2net)"
                                  : "(Delphinet)"}
                              </Typography>
                            )} */}
                                                    </Grid>
                                                )
                                            )}
                                        </Grid>
                                        <Grid item>
                                            <SubTitle style={{ marginBottom: '6px' }}>
                                                API Key
                                            </SubTitle>
                                            <Grid
                                                item
                                                container
                                                alignItems="center"
                                                direction="row"
                                                justify="space-between"
                                            >
                                                <LinkBox
                                                    container
                                                    alignItems="center"
                                                    justify="space-between"
                                                >
                                                    <ApiKeyText>
                                                        {apiKeys[selectedKey].key}
                                                    </ApiKeyText>
                                                    <Grid
                                                        item
                                                        container
                                                        alignItems="center"
                                                        direction="column"
                                                        component="div"
                                                        style={{ width: '50px' }}
                                                    >
                                                        <CopyButton
                                                            txt={apiKeys[selectedKey].key}
                                                            margin=""
                                                        />
                                                        <CopyText>Copy</CopyText>
                                                    </Grid>
                                                </LinkBox>
                                                <GenerateKeyButton onClick={() => setOpen(true)}>
                                                    New Key
                                                </GenerateKeyButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </DetailsBg>
                            </Grid>
                            {activePlan && (
                                <Grid
                                    item
                                    container
                                    style={{ width: '512px' }}
                                    justify="space-between"
                                    direction="row"
                                >
                                    <Grid item style={{ width: '100%' }}>
                                        <SubTitle style={{ marginBottom: '12px' }}>
                                            Requests
                                        </SubTitle>
                                        {activePlan.planId === 1 && (
                                            <>
                                            <Request
                                                description={`Current 30 Day Cycle: ${displayTimestamp(
                                                    activePlan.started
                                                )} - ${displayTimestamp(activePlan.ends)}`}
                                                requests={activePlan.usedRequests >= activePlan.maxRequests ? activePlan.maxRequests : activePlan.usedRequests}
                                                limit={activePlan.maxRequests}
                                                basic
                                            />
                                            {activePlan.usedRequests >= activePlan.maxRequests && <Hint className="caution">
                                                You have reached monthly query limit. Please upgrade your subscription.
                                            </Hint>}
                                            </>
                                        )}
                                        {activePlan.planId === 2 && (
                                            <Request
                                                description={`Current Subscription: ${displayTimestamp(
                                                    activePlan.started
                                                )} - ${displayTimestamp(activePlan.ends)}`}
                                                requests={activePlan.usedRequests}
                                                basic={false}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item style={{ width: '100%', alignSelf: 'flex-end' }}>
                                        <SubTitle style={{ marginBottom: '12px' }}>
                                            Subscription
                                        </SubTitle>
                                        <Subscription
                                            basic={activePlan.planId === 1}
                                            subscriptionCreated={!!subscryptionPro}
                                            onUpgrade={onUpgrade}
                                            onRenew={onRenew}
                                        />
                                    </Grid>
                                </Grid>
                            )}
                        </Details>
                    </TabContent>
                )}
                <TabContent
                    role="tabpanel"
                    hidden={tabID !== 1}
                    id="tezos-tabpanel-1"
                    aria-labelledby="tezos-tab-1"
                >
                    <Resources>
                        <Stats />
                    </Resources>
                </TabContent>
            </Main>
            {open && (
                <Modal open={open} onClose={onClose}>
                    <ModalTitle id="customized-dialog-title" disableTypography>
                        Generate new API Keys
                    </ModalTitle>
                    <ModalContent>
                        <ModalInfoText>
                            Are you sure you want to create a new API key?
                        </ModalInfoText>
                        <ModalInfoText>
                            {`This will immediately revoke your ${getItemName(
                                apiKeys[selectedKey].environment
                            )} key `}
                        </ModalInfoText>
                        <ModalInfoText>access and cannot be undone.</ModalInfoText>
                    </ModalContent>
                    <ModalActionsWrapper>
                        <ModalButtonCancel onClick={onClose}>Cancel</ModalButtonCancel>
                        <ModalButtonAccept
                            onClick={() =>
                                refreshKeys(apiKeys[selectedKey].environment, selectedKey)
                            }
                        >
                            Continue
                        </ModalButtonAccept>
                    </ModalActionsWrapper>
                </Modal>
            )}
        </>
    );
};

export default Keys;
