import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { useSelector } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { IAppState, IToken } from "../../models";
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
} from "./style";
import Request from "../../components/Request";
import Subscription from "../../components/Subscription";
import config from "../../config";

import CustomImg from "../../components/CustomImg";
import CopyButton from "../../components/CopyButton";
import bookIcon from "../../assets/img/book-icon.svg";
import programmingIcon from "../../assets/img/js-programming.svg";
import scriptIcon from "../../assets/img/script-code-coding.svg";
import http, { rebuildHttp } from "../../utils/httpService";
import { Plan } from "../../types";
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
  const { onLogout, userInfo } = props;
  const [apiKeys, setApiKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState(0);
  const [open, setOpen] = useState(false);
  const [tabID, setTabID] = React.useState<number>(0);
  const [plan, setPlan] = useState<Plan>(Plan.Basic);

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
        setApiKeys(
          response.data.slice().sort((a, b) => (a.env > b.env ? 1 : -1))
        );
      } else {
        onLogout();
      }
    } catch (error) {
      console.error("errr", error);
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
      console.error("errr", error);
    }
  }

  useEffect(() => {
    getKeys();
  }, [userInfo.userId]);

  function openUrl(url) {
    if (url) window.open(url, "_blank");
  }

  function getItemName(name) {
    return name === "prod" ? prodName : devName;
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
          <TabsWrapper
            value={tabID}
            onChange={onTabIDChanged}
            aria-label="tezos tabs"
          >
            <TabWrapper
              label="API"
              id="tezos-tab-0"
              aria-controls="tezos-tabpanel-0"
            />
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
                <SubTitle style={{ marginBottom: "12px" }}>API Keys</SubTitle>
                <DetailsBg elevation={0}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={3}
                  >
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
                                inputProps={{ "aria-label": "naked" }}
                              />
                            }
                            inputProps={{ "aria-label": "endpoints" }}
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
                        {apiKeys[selectedKey].environment === "dev" && (
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
                      <SubTitle style={{ marginBottom: "6px" }}>
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
                          <ApiKeyText>{apiKeys[selectedKey].key}</ApiKeyText>
                          <Grid
                            item
                            container
                            alignItems="center"
                            direction="column"
                            component="div"
                            style={{ width: "50px" }}
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
              <Grid
                item
                container
                style={{ width: "512px" }}
                justify="space-between"
                direction="row"
              >
                <Grid item style={{ width: "100%" }}>
                  <SubTitle style={{ marginBottom: "12px" }}>Requests</SubTitle>
                  {plan === Plan.Basic && (
                    <Request
                      description="Current 30 Day Cycle:  February 1 - March 30"
                      requests={1000000}
                      limit={3000000}
                      basic
                    />
                  )}
                  {plan === Plan.Pro && (
                    <Request
                      description="Current Subscription:  Feb 1, 2021 to April 1, 2021"
                      requests={1000000}
                      basic={false}
                    />
                  )}
                </Grid>
                <Grid item style={{ width: "100%", alignSelf: "flex-end" }}>
                  <SubTitle style={{ marginBottom: "12px" }}>
                    Subscription
                  </SubTitle>
                  <Subscription basic={plan == Plan.Basic} />
                </Grid>
              </Grid>
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
            <TitleText>Resources to get Started</TitleText>
            <ResourcesLinksContainer container alignItems="center">
              <ResourcesLinkItem item onClick={() => openUrl(handbook)}>
                <CustomImg src={bookIcon} size="4.5rem" name="book-icon" />
                <ResourcesLinks variant="subtitle1">
                  Tezos Developers' Handbook
                </ResourcesLinks>
              </ResourcesLinkItem>
              <ResourcesLinkItem item onClick={() => openUrl(conseil)}>
                <CustomImg src={scriptIcon} size="4.5rem" name="script-icon" />
                <ResourcesLinks variant="subtitle1">
                  Conseil Documentation
                </ResourcesLinks>
              </ResourcesLinkItem>
              <ResourcesLinkItem item onClick={() => openUrl(conseiljs)}>
                <CustomImg
                  src={programmingIcon}
                  size="4.5rem"
                  name="programming-icon"
                />
                <ResourcesLinks variant="subtitle1">
                  Conseil.JS Documentation
                </ResourcesLinks>
              </ResourcesLinkItem>
            </ResourcesLinksContainer>
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
