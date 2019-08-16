import React, { useState } from 'react';
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

import keysvg from '../../assets/img/seq-key_icon.svg';
import installsvg from '../../assets/img/seq-install_icon.svg';
import cubesvg from '../../assets/img/seq-node-cube_icon.svg';
import tutorialsvg from '../../assets/img/seq-tutorials_icon.svg';
import arronaxpng from '../../assets/img/img-arronax_graphic.png';
import galleonpng from '../../assets/img/img-galleon_graphic.png';
import chevGrSvg from '../../assets/img/chev-green-icon.svg';

const tabsList = ['web', 'java'];

const stepList = [
  { name: 'Get API Key', icon: keysvg },
  { name: 'Create Node.js Project', icon: cubesvg },
  { name: 'Install Conseil.js', icon: installsvg },
  { name: 'Checkout Tutorials', icon: tutorialsvg }
];

const Home: React.FC<{}> = () => {
  const [selectedTab, setSelectedTab] = useState('web');
  const [completedStep, setCompletedStep] = useState(2);
  return (
    <Container>
      <Header />
      <KeyContainer>
        <HeaderOval1 />
        <HeaderOval2 />
        <HeaderOval3 />
        <KeyMainContainer>
          <ApiTxt>API Keys</ApiTxt>
          <EnvRowContainer>
            <KeyContent env='production' />
            <KeyContent env='development' />
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
                <>
                  <Step key={index} item={item} index={index} isActive={index < completedStep} />
                  {index !== 3 && <TabLine />}
                </>
              )
            )}
          </TabContent>
          <ResTxt>Resources</ResTxt>
          <ResContainer>
            <ResColum>
              <img src={arronaxpng} />
              <ResContent>
                <ResTitle>Arronax Blockchain Analytics</ResTitle>
                <ResDesTxt>Simple way to make sequal-like queries of the Tezos blockchain.</ResDesTxt>
                <LearnMore>Learn More <ChevIcon src={chevGrSvg} /></LearnMore>
              </ResContent>
            </ResColum>
            <ResColum>
              <img src={galleonpng} />
              <ResContent>
                <ResTitle>Galleon Wallet</ResTitle>
                <ResDesTxt>Easy and secure transactions, delegation, and smart contracts deployment.</ResDesTxt>
                <LearnMore>Learn More <ChevIcon src={chevGrSvg} /></LearnMore>
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

export default Home;