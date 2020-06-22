import React from 'react';
import { Link } from 'react-router-dom';
import {
    MainList,
    ListItemLarge,
    ListItemLargeText,
    ListItemSmallText,
    ListItemSmall,
    IconLarge,
    SocialList,
    useSideBarStyles,
    IconWrapper,
} from './style';

import CustomImg from '../../components/CustomImg';
import CustomIcon from '../../components/CustomIcon';
import logo from '../../assets/img/logo.svg';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';

import GithubIcon from '../../assets/img/sm_github_icon.svg';
import RiotIcon from '../../assets/img/sm_riot_icon.svg';
import TwitterIcon from '../../assets/img/sm_twitter_icon.svg';
import MediumIcon from '../../assets/img/sm_medium_icon.svg';
import { ReactComponent as GearIcon } from '../../assets/img/gear-icon.svg';
import { ReactComponent as StatIcon } from '../../assets/img/stat-icon.svg';

import config from '../../config';
const { twitter, gitHub, riot, medium, termsOfService, privacyPolicy } = config;

const SideBar = ({ drawer, pathname }) => {
    const classes = useSideBarStyles(drawer);
    const onClick = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    const isActiveKeys = pathname === '/home/keys' ? '#7dc0de' : '#ffffff';
    const isAciveStats = pathname === '/home/stats' ? '#7dc0de' : '#ffffff';

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar}>
                <CustomImg src={logo} size="3.875rem" name="logo" />
            </div>
            <Divider />
            <MainList>
                <Link to="/home/keys">
                    <ListItemLarge button>
                        <IconLarge>
                            <IconWrapper>
                                <CustomIcon
                                    Component={GearIcon}
                                    size="30px"
                                    color1={isActiveKeys}
                                />
                            </IconWrapper>
                        </IconLarge>
                        <ListItemLargeText
                            primary="API Key"
                            disableTypography
                            color={isActiveKeys}
                        />
                    </ListItemLarge>
                </Link>
                <Link to="/home/keys">
                    <Tooltip
                        PopperProps={{ disablePortal: true, placement: 'bottom' }}
                        title="Coming Soon"
                    >
                        <ListItemLarge button disabled style={{ pointerEvents: 'auto' }}>
                            <ListItemIcon>
                                <IconWrapper>
                                    <CustomIcon
                                        Component={StatIcon}
                                        size="30px"
                                        color1={isAciveStats}
                                    />
                                </IconWrapper>
                            </ListItemIcon>
                            <ListItemLargeText
                                primary="API Stats"
                                disableTypography
                                color={isAciveStats}
                            />
                        </ListItemLarge>
                    </Tooltip>
                </Link>
            </MainList>
            <SocialList>
                <ListItemSmall button onClick={() => onClick(twitter)}>
                    <ListItemIcon>
                        <CustomImg src={TwitterIcon} size="1rem" name="twitter" />
                    </ListItemIcon>
                </ListItemSmall>
                <ListItemSmall button onClick={() => onClick(gitHub)}>
                    <ListItemIcon>
                        <CustomImg src={GithubIcon} size="1rem" name="github" />
                    </ListItemIcon>
                </ListItemSmall>
                <ListItemSmall button onClick={() => onClick(riot)}>
                    <ListItemIcon>
                        <CustomImg src={RiotIcon} size="1rem" name="riot" />
                    </ListItemIcon>
                </ListItemSmall>
                <ListItemSmall button onClick={() => onClick(medium)}>
                    <ListItemIcon>
                        <CustomImg src={MediumIcon} size="1rem" name="medium" />
                    </ListItemIcon>
                </ListItemSmall>
            </SocialList>
            <List>
                <ListItemSmall button>
                    <ListItemSmallText
                        primary="Terms of Service"
                        disableTypography
                        onClick={() => onClick(termsOfService)}
                    />
                </ListItemSmall>
                <ListItemSmall button>
                    <ListItemSmallText
                        primary="Privacy Policy"
                        disableTypography
                        onClick={() => onClick(privacyPolicy)}
                    />
                </ListItemSmall>
            </List>
        </Drawer>
    );
};

export default SideBar;
