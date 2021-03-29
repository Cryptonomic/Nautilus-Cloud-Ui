import React from "react";
import { Link } from "react-router-dom";
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
  LogoButton,
  SupportWrapper,
  SupportLink,
  SupportLinkWrapper,
} from "./style";

import CustomImg from "../../components/CustomImg";
import CustomIcon from "../../components/CustomIcon";
import logo from "../../assets/img/logo.svg";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip";

import { ReactComponent as TezosIcon } from "../../assets/img/tezos.svg";
import { ReactComponent as UserIcon } from "../../assets/img/user.svg";
import { ReactComponent as EmailIcon } from "../../assets/img/email.svg";
import { ReactComponent as GearIcon } from "../../assets/img/gear-icon.svg";
import { ReactComponent as StatIcon } from "../../assets/img/stat-icon.svg";

import config from "../../config";
const { twitter, gitHub, riot, medium, termsOfService, privacyPolicy } = config;

const SideBar = ({ drawer, pathname }) => {
  const classes = useSideBarStyles(drawer);
  const onClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  const isActiveKeys = pathname === "/home/keys" ? "#7dc0de" : "#ffffff";
  const isAciveStats = pathname === "/home/stats" ? "#7dc0de" : "#ffffff";

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <LogoButton startIcon={<CustomImg src={logo} size="23px" name="logo" />}>
        Nautilus Cloud
      </LogoButton>
      <Divider />
      <MainList>
        <Link to="/home/keys">
          <ListItemLarge
            button
            className={pathname === "/home/keys" ? "active" : ""}
          >
            <IconLarge>
              <IconWrapper>
                <CustomIcon
                  Component={TezosIcon}
                  size="30px"
                  color1={isActiveKeys}
                />
              </IconWrapper>
            </IconLarge>
            <ListItemLargeText
              primary="API Keys"
              disableTypography
              color={isActiveKeys}
            />
          </ListItemLarge>
        </Link>
        <Link to="/home/account">
          <ListItemLarge
            button
            className={pathname === "/home/account" ? "active" : ""}
          >
            <ListItemIcon>
              <IconWrapper>
                <CustomIcon
                  Component={UserIcon}
                  size="30px"
                  color1={isAciveStats}
                />
              </IconWrapper>
            </ListItemIcon>
            <ListItemLargeText
              primary="Account"
              disableTypography
              color={isAciveStats}
            />
          </ListItemLarge>
        </Link>
      </MainList>
      <SupportWrapper>
        <ListItemLargeText
          primary="Need Help?"
          disableTypography
          style={{ textAlign: "center" }}
        />
        <SupportLinkWrapper>
          <CustomIcon
            Component={EmailIcon}
            size="14px"
            color1={isActiveKeys}
          />
          <SupportLink href="mailto:support@cryptonomic.tech">Email Support</SupportLink>
        </SupportLinkWrapper>
      </SupportWrapper>
    </Drawer>
  );
};

export default SideBar;
