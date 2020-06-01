import React, { Fragment, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import Loader from '../Loader';
import CustomImg from '../CustomImg';
import logo from '../../assets/img/new/logo.svg';
import config from '../../config';

import {
    Container,
    Header,
    MainContainer,
    TitleContainer,
    LogoContainer,
    ContentContainer,
    TermsContent,
    CustomDivider,
    LinkTxt,
    AcceptBtn,
    DeclineBtn,
    CheckContent,
    BottomContent,
    SendMeTxt,
} from './style';

const CallBack: React.FC<RouteComponentProps> = (props) => {
    const { location, history } = props;
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [attemptId, setAttemptId] = useState('');
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    if (!code) {
        history.push('/');
    }
    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.post(
                    `${config.url}/users/github-init`,
                    { code },
                    { withCredentials: true }
                );
                const { header, payload } = response.data;
                if (header.payloadType === 'REGISTERED') {
                    localStorage.setItem('userInfo', JSON.stringify(payload));
                    history.push('/home');
                } else if (header.payloadType === 'REGISTRATION') {
                    setIsLoading(false);
                    setAttemptId(payload.registrationAttemptId);
                } else {
                    history.push('/');
                }
            } catch (error) {
                console.error('errr', error);
                history.push('/');
            }
        }
        getUser();
    }, [code]);

    function handleChangeChk() {
        setIsChecked(!isChecked);
    }

    function onDecline() {
        localStorage.removeItem('userInfo');
        history.push('/');
    }

    async function onAccept() {
        try {
            const body = {
                registrationAttemptId: attemptId,
                tosAccepted: true,
                newsletterAccepted: isChecked,
            };
            const response = await axios.post(`${config.url}/users/register`, body, {
                withCredentials: true,
            });
            const { header, payload } = response.data;
            if (header.payloadType === 'REGISTERED') {
                localStorage.setItem('userInfo', JSON.stringify(payload));
                history.push('/home');
            } else {
                history.push('/');
            }
        } catch (error) {
            console.error('errr', error);
            history.push('/');
        }
    }

    function openUrl(url) {
        if (url) window.open(url, '_blank');
    }

    return (
        <Container>
            {isLoading ? (
                <Loader />
            ) : (
                <Fragment>
                    <Header>
                        <Typography variant="h5">
                            Please accept the terms of service to continue
                        </Typography>
                    </Header>
                    <MainContainer>
                        <TitleContainer>
                            <LogoContainer>
                                <CustomImg src={logo} size="2.125rem" name="logo" />
                            </LogoContainer>
                            <Typography variant="h6" component="span">
                                Nautilus Cloud
                            </Typography>
                        </TitleContainer>
                        <ContentContainer>
                            <TermsContent>
                                By registering for and using NautilusCloud services, <br />I agree
                                to the{' '}
                                <LinkTxt onClick={() => openUrl(config.terms)}>
                                    Terms of Service
                                </LinkTxt>{' '}
                                and{' '}
                                <LinkTxt onClick={() => openUrl(config.terms)}>
                                    Privacy Policy
                                </LinkTxt>
                            </TermsContent>
                            <CustomDivider />
                            <CheckContent>
                                <Checkbox
                                    checked={isChecked}
                                    onChange={() => handleChangeChk()}
                                    color="primary"
                                    inputProps={{
                                        'aria-label': 'secondary checkbox',
                                    }}
                                />
                                <SendMeTxt>
                                    I permit Cryptonomic to send me periodic emails about service
                                    updates and policy changes.
                                </SendMeTxt>
                            </CheckContent>
                            <CustomDivider />
                            <BottomContent>
                                <DeclineBtn onClick={onDecline}>Decline and Sign out</DeclineBtn>
                                <AcceptBtn onClick={onAccept}>Accept terms</AcceptBtn>
                            </BottomContent>
                        </ContentContainer>
                    </MainContainer>
                </Fragment>
            )}
        </Container>
    );
};

export default withRouter(CallBack);
