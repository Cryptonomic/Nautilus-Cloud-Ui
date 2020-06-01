import React from 'react';
import Grid from '@material-ui/core/Grid';

import MenuButton from '../MenuButton';
import CustomImg from '../CustomImg';
import { LogoButton, LoginButton, ToolbarWrapper, AppBarWrapper } from './style';
import logo from '../../assets/img/new/logo.svg';

import config from '../../config';
const { handbook, support, conseil, conseiljs } = config;

const TopBar = ({ drawer = '', onLogin }: { drawer?: string; onLogin?: () => void }) => {
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
                            <LoginButton onClick={onLogin}>Log-in</LoginButton>
                        </Grid>
                    </Grid>
                </Grid>
            </ToolbarWrapper>
        </AppBarWrapper>
    );
};

export default TopBar;
