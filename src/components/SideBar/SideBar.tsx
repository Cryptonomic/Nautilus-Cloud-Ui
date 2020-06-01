import React from 'react';
import {
    ListItemLarge,
    ListItemLargeText,
    ListItemSmallText,
    ListItemSmall,
    IconLarge,
    SocialList,
    useSideBarStyles,
} from './style';

import CustomImg from '../../components/CustomImg';
import CustomIcon from '../../components/CustomIcon';
import logo from '../../assets/img/new/logo.svg';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import GithubIcon from '../../assets/img/new/sm_github_icon.svg';
import RiotIcon from '../../assets/img/new/sm_riot_icon.svg';
import TwitterIcon from '../../assets/img/new/sm_twitter_icon.svg';
import MediumIcon from '../../assets/img/new/sm_medium_icon.svg';
import { ReactComponent as GearIcon } from '../../assets/img/new/gear-icon.svg';

import config from '../../config';
const { handbook, conseil, conseiljs, twitter, gitHub, riot, medium, terms } = config;

const SideBar = (width) => {
    const classes = useSideBarStyles(width);
    const onClick = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };
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
            <List>
                <ListItemLarge button>
                    <IconLarge>
                        <CustomIcon Component={GearIcon} size="30px" color1="#7dc0de" />
                    </IconLarge>
                    <ListItemLargeText primary="API Key" disableTypography color="#7dc0de" />
                </ListItemLarge>
                {/* <ListItemLarge button>
                        <ListItemIcon>
                            <CustomImg src={statIcon} size="1.875rem" name="api-stat-icon" />
                        </ListItemIcon>
                        <ListItemLargeText primary="API Stats" disableTypography />
                    </ListItemLarge> */}
            </List>
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
                        onClick={() => onClick(terms)}
                    />
                </ListItemSmall>
                <ListItemSmall button>
                    <ListItemSmallText
                        primary="Privacy Policy"
                        disableTypography
                        onClick={() => onClick(terms)}
                    />
                </ListItemSmall>
            </List>
        </Drawer>
    );
};

export default SideBar;
