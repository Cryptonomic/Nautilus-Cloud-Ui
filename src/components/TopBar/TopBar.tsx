import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import { styled, withStyles, makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

import MenuButton from '../MenuButton';

import { LogoButton, LogoIcon, LogoImg } from './style';
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
            <Toolbar>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={6}>
                        <Grid container></Grid>
                        <LogoButton
                            showLabel
                            label="Nautilus Cloud"
                            icon={
                                <LogoIcon>
                                    <LogoImg src={logo} alt="logo" />
                                </LogoIcon>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuButton label="Resources" items={resourcesItems}/>
                            <MenuButton label="Docs" items={docsItems}/>
                            <div>Log-in</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
