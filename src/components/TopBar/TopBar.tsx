import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import MenuButton from '../MenuButton';
import CustomImg from '../CustomImg';
import { LogoButton, LoginButton, ToolbarWrapper } from './style';
import logo from '../../assets/img/new/logo.svg';

const TopBar = () => {

    const resourcesItems = [
      { name: 'Tezos Developer Handbook', link: '' },
      { name: 'Support', link: '' }
    ];

    const docsItems = [
      { name: 'Conseil', link: '' },
      { name: 'Conseil.JS', link: '' }
    ]

    return (
        <AppBar>
            <ToolbarWrapper>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={6}>
                        <Grid container></Grid>
                        <LogoButton
                            showLabel
                            label="Nautilus Cloud"
                            icon={<CustomImg src={logo} size="1.75rem" name="logo" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuButton label="Resources" items={resourcesItems}/>
                            <MenuButton label="Docs" items={docsItems}/>
                            <LoginButton>Log-in</LoginButton>
                        </Grid>
                    </Grid>
                </Grid>
            </ToolbarWrapper>
        </AppBar>
    );
};

export default TopBar;
