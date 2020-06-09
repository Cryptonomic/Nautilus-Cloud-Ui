import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MenuButton from '../MenuButton';
import CustomImg from '../CustomImg';
import CustomIcon from '../CustomIcon';
import { LogoButton, LoginButton, ToolbarWrapper, AppBarWrapper, UserName } from './style';
import logo from '../../assets/img/logo.svg';
import { ReactComponent as GitHubIcon } from '../../assets/img/github.svg';

import config from '../../config';
const { handbook, support, conseil, conseiljs } = config;

const TopBar = ({
    drawer = '',
    userEmail,
    onLogin,
    onLogout,
}: {
    drawer?: number | string;
    userEmail?: string;
    onLogin?: () => void;
    onLogout?: () => void;
}) => {
    const resourcesItems = [
        { name: 'Tezos Developer Handbook', link: handbook },
        { name: 'Support', link: support },
    ];

    const docsItems = [
        { name: 'Conseil', link: conseil },
        {
            name: 'Conseil.JS',
            link: conseiljs,
        },
    ];

    return (
        <AppBarWrapper drawer={drawer}>
            <ToolbarWrapper>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={6}>
                        <Grid container></Grid>
                        <LogoButton
                            showLabel
                            label="Nautilus Cloud"
                            icon={
                                !drawer ? <CustomImg src={logo} size="1.75rem" name="logo" /> : ''
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuButton label="Resources" items={resourcesItems} />
                            <MenuButton label="Docs" items={docsItems} />
                            {!userEmail && <LoginButton onClick={onLogin}>Log-in</LoginButton>}
                            {userEmail && (
                                <MenuButton
                                    label={
                                        <Grid
                                            container
                                            alignItems="center"
                                            justify="space-between"
                                            wrap="nowrap"
                                        >
                                            <CustomIcon
                                                Component={GitHubIcon}
                                                size="33px"
                                                color1="#c5d2de"
                                            />
                                            <UserName>{userEmail.split('@')[0]}</UserName>
                                            <ExpandMoreIcon />
                                        </Grid>
                                    }
                                    items={[
                                        {
                                            name: 'Logout',
                                            link: '',
                                            offIcon: true,
                                            action: onLogout,
                                        },
                                    ]}
                                    posRight
                                />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </ToolbarWrapper>
        </AppBarWrapper>
    );
};

export default TopBar;
