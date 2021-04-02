import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';

import MenuButton from "../MenuButton";
import CustomImg from "../CustomImg";
import CustomIcon from "../CustomIcon";
import {
  LogoButton,
  LoginButton,
  ToolbarWrapper,
  AppBarWrapper,
  UserName,
  LeftPanel,
  CenterPanel,
  RightPanel,
  ArrowDownIconWrapper,
  MenuGridWrapper as MenuGrid,
  TopBarText,
  ChatLink,
} from "./style";
import logo from "../../assets/img/logo.svg";
import { ReactComponent as GitHubIcon } from "../../assets/img/github.svg";
import {ReactComponent as GithubIconSmall} from "../../assets/img/github-style-1.svg";
import config from "../../config";
import { useScroll } from "../../hooks/useScroll";
const { handbook, support, conseil, conseiljs } = config;

const TopBar = ({
  drawer = "",
  userEmail,
  isRootPage,
  background = "",
  onLogin,
  onLogout,
  onPrices,
  style
}: {
  drawer?: number | string;
  userEmail?: string;
  style?: React.CSSProperties;
  isRootPage: boolean;
  background?: string;
  onLogin?: () => void;
  onLogout?: () => void;
  onPrices?: () => void;
}) => {
  const resourcesItems = [
    { name: "Tezos Developer Handbook", link: handbook },
    { name: "Support", link: support },
  ];

  const docsItems = [
    { name: "Conseil", link: conseil },
    {
      name: "Conseil.JS",
      link: conseiljs,
    },
  ];
  const { scrollY } = useScroll();
  return (
    <AppBarWrapper
      drawer={drawer}
      position="fixed"
      background={background}
      className={scrollY > 15 ? "float" : ""}
    >
      <ToolbarWrapper>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {isRootPage && (
            <Grid item xs={4}>
              {/* <Grid container></Grid> */}
              <LogoButton
                showLabel
                label="Nautilus Cloud"
                icon={
                  !drawer ? (
                    <CustomImg src={logo} size="1.75rem" name="logo" />
                  ) : (
                    ""
                  )
                }
              />
            </Grid>
          )}

          <CenterPanel item xs={4}>
            <Grid
              container
              direction="row"
              justify={!isRootPage ? "flex-start" : "space-between"}
              alignItems="center"
            >
              {isRootPage && <span onClick={onPrices}><MenuButton label={<TopBarText>Prices</TopBarText>} /></span>}
              <MenuButton
                label={
                  <MenuGrid container alignItems="center" wrap="nowrap">
                    <span>Resources</span>
                    <ArrowDownIconWrapper />
                  </MenuGrid>
                }
                items={resourcesItems}
                style={
                  !isRootPage ? { marginRight: "30px" } : { marginRight: "0px" }
                }
              />
              <MenuButton
                label={
                  <MenuGrid container alignItems="center" wrap="nowrap">
                    <span>Docs</span>
                    <ArrowDownIconWrapper />
                  </MenuGrid>
                }
                items={docsItems}
              />
            </Grid>
          </CenterPanel>
          <RightPanel item xs={4}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              {isRootPage && (
                <MenuButton
                  label={<ChatLink href="https://matrix.to/#/!heGqMNcsOSHGPxrMJs:cryptonomic.tech" target="_blank">Join Our Element Chat</ChatLink>}
                  style={{ marginRight: "4vw" }}
                />
              )}
              {!userEmail && (
                <LoginButton onClick={onLogin}>
                  {/* <CustomImg
                    src={GithubIconDefault}
                    size="16px"
                    name="github-icon"
                    style={{ margin: "0px 8px 0px 0" }}
                  /> */}
                  <GithubIconSmall className={"btnIcon"} />
                  Sign-in
                </LoginButton>
              )}
              {userEmail && (
                <MenuButton
                  label={
                    <MenuGrid
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
                      <UserName>{userEmail.split("@")[0]}</UserName>
                      <ArrowDownIconWrapper />
                    </MenuGrid>
                  }
                  items={[
                    {
                      name: "Logout",
                      link: "",
                      offIcon: true,
                      action: onLogout,
                    },
                  ]}
                  posRight
                />
              )}
            </Grid>
          </RightPanel>
        </Grid>
      </ToolbarWrapper>
    </AppBarWrapper>
  );
};

export default TopBar;
