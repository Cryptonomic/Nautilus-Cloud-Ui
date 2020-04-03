import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header';
import KeyContent from '../../components/KeyContent';
import Footer from '../../components/Footer';
import Tab from '../../components/Tab';
import Step from '../../components/StepItem';
import {
  Container, KeyContainer, HeaderOval1, HeaderOval2, HeaderOval3,
  KeyMainContainer, ApiTxt, EnvRowContainer, MainContainer, TabContainer,
  FooterContainer, FooterMain, MainContent, StartedTxt, TabContent, TabLine,
  ResContainer, ResTxt, ResColum, ResContent, ResTitle, ResDesTxt, LearnMore,
  ChevIcon
} from './style';
import config from '../../config';
import { User } from '../../types';

import keysvg from '../../assets/img/seq-key_icon.svg';
import installsvg from '../../assets/img/seq-install_icon.svg';
import cubesvg from '../../assets/img/seq-node-cube_icon.svg';
import tutorialsvg from '../../assets/img/seq-tutorials_icon.svg';
import arronaxpng from '../../assets/img/img-arronax_graphic.png';
import galleonpng from '../../assets/img/img-galleon_graphic.png';
import chevGrSvg from '../../assets/img/chev-green-icon.svg';
import WarningIcon from '@material-ui/icons/Warning';

const tabsList = ['node'];

const stepList = [
  { name: 'Get API Key', icon: keysvg },
  { name: 'Create Node.js Project', icon: cubesvg },
  { name: 'Install ConseilJS', icon: installsvg, link: 'https://www.npmjs.com/package/conseiljs' },
  { name: 'Checkout Tutorials', icon: tutorialsvg, link: 'https://cryptonomic.github.io/ConseilJS/#/' }
];

const urls = {
  arronax: 'https://arronax-beta.cryptonomic.tech',
  galleon: 'https://galleon-wallet.tech'
};

const Home: React.FC<RouteComponentProps> = (props) => {
  const { history } = props;
  const [logoutTimer, setLogoutTimer] = useState(10);
  const [displayBrowserWarning, setDisplayBrowserWarning] = useState(true);
  const [selectedTab, setSelectedTab] = useState('web');
  const [completedStep, setCompletedStep] = useState(0);
  const [apiKeys, setApiKeys] = useState([]);
  const userStringInfo = localStorage.getItem('userInfo');
  let userInfo: User = {userEmail: ''};
  if (userStringInfo) {
    userInfo = JSON.parse(userStringInfo);
  }

  async function getKeys() {
    try {
      const response = await axios.get(`${config.url}/users/me/apiKeys`, {withCredentials: true});
      if (!!response.data && response.data.length > 1) {
        setApiKeys(response.data.slice().sort((a, b) => (a.env > b.env) ? 1 : -1));
      } else {
        setDisplayBrowserWarning(true);
      }
    } catch (error) {
      console.error('errr', error);
      onLogout();
    }
  }

  async function refreshKeys(env, index) {
    try {
      const newKey = await axios.post(`${config.url}/users/me/apiKeys/${env}/refresh`, {}, {withCredentials: true});
      apiKeys[index] = newKey.data;
      setApiKeys([...apiKeys]);

    } catch (error) {
      console.error('errr', error);
    }
  }

  useEffect(() => {
    getKeys();
  }, [userInfo.userId]);

  useEffect(() => {
    if (displayBrowserWarning) {
      if (logoutTimer <= 10 && logoutTimer > 0) {
        setTimeout(() => {
          setLogoutTimer((currLogoutTimer) => currLogoutTimer - 1);
        }, 1000);
        return;
      }
      setDisplayBrowserWarning(false);
      onLogout();
    }
  }, [displayBrowserWarning, logoutTimer])

  function onLogout() {
    localStorage.removeItem('userInfo');
    history.push('/');
  }

  function openUrl(url) {
    if (url) window.open(url, '_blank');
  }

  return ( 
    <Container> 
      <Header user={userInfo} onLogout={onLogout} />
      {displayBrowserWarning && (
        <div style={{ backgroundColor: '#fcf8e3', display: 'flex', alignItems: 'center'}}>
          <WarningIcon style={{ margin: '0 10px' }}/>
      <p>We are currently working on solving compatibility issues with some browsers. If you are unable to see your API keys, please try to log in using <a href="https://www.mozilla.org/firefox/download" target="_blank" style={{ color: 'black' }}>Firefox</a>. Logout in {logoutTimer} sec.</p>
        </div>
      )} 
      <KeyContainer>
        <HeaderOval1 />
        <HeaderOval2 />
        <HeaderOval3 />
        <KeyMainContainer>
          <ApiTxt>API Keys</ApiTxt>
          <EnvRowContainer>
            {apiKeys.map((item, index) => <KeyContent key={index} env={item.environment} apiKey={item.key} onRefresh={() => refreshKeys(item.environment, index)} />)}
          </EnvRowContainer>
        </KeyMainContainer>
      </KeyContainer>
      <MainContainer>
        <MainContent>
          <StartedTxt>Getting Started</StartedTxt>
          <TabContainer>
            {tabsList.map(tab => <Tab key={tab} name={tab} isActive={tab === selectedTab} onChange={() => setSelectedTab(tab)} />)}
          </TabContainer>
          <TabContent>
            {stepList.map((item, index) => (
                <React.Fragment key={index}>
                  <Step key={index} item={item} index={index} isActive={index < completedStep} onOpenUrl={() => openUrl(item.link)} />
                  {index !== 3 && <TabLine />}
                </React.Fragment>
              )
            )}
          </TabContent>
          <ResTxt>Resources</ResTxt>
          <ResContainer>
            <ResColum>
              <img src={arronaxpng} />
              <ResContent>
                <ResTitle>Arronax Blockchain Analytics</ResTitle>
                <ResDesTxt>Make sophisticated queries against the Tezos blockchain.</ResDesTxt>
                <LearnMore onClick={() => openUrl(urls.arronax)}>Learn More <ChevIcon src={chevGrSvg} /></LearnMore>
              </ResContent>
            </ResColum>
            <ResColum>
              <img src={galleonpng} />
              <ResContent>
                <ResTitle>Galleon Wallet</ResTitle>
                <ResDesTxt>Easy and secure wallet for Tezos with smart contract support.</ResDesTxt>
                <LearnMore onClick={() => openUrl(urls.galleon)}>Learn More <ChevIcon src={chevGrSvg} /></LearnMore>
              </ResContent>
            </ResColum>
          </ResContainer>
        </MainContent>
      </MainContainer>
      <FooterContainer>
        <FooterMain>
          <Footer />
        </FooterMain>
      </FooterContainer>
    </Container>
  );
};

export default withRouter(Home);