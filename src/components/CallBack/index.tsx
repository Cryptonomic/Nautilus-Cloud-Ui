import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import styled, { css } from 'styled-components';
import logosvg from '../../assets/img/logo-dark.svg';
import config from '../../config';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const Header = styled.div`
  width: 100%;
  height: 92px;
  background: rgb(98, 104, 246);
  line-height: 28px;
  color: rgb(250, 251, 252);
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 100%;
  margin-top: 116px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  height: 27px;
  width: 39px;
`;
export const HeaderTitle = styled.p`
  line-height: 39px;
  color: rgb(13, 47, 113);
  font-size: 30px;
  font-family: 'Futura', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4.55px;
  margin: 0 0 0 9px;
  span {
    color: rgb(98, 108, 238);
  }
`;

export const ContentContainer = styled.div`
  width: 499px;
  height: 257px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(216, 218, 222);
  border-radius: 0px;
  margin: 23px auto 0 auto;
  display: flex;
  flex-direction: column;
`;
export const TermsCotent = styled.div`
  height: 107px;
  padding: 39px 44px 0 29px;
  line-height: 21px;
  color: rgb(18, 50, 98);
  font-size: 18px;
  font-weight: 300;
  border-bottom: 1px solid rgb(216, 218, 222);
`;
export const LinkTxt = styled.div`
  color: #17bcfc;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
`;
export const CheckContent = styled.div`
  height: 76px;
  padding-left: 29px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(216, 218, 222);
`;

export const CheckBox = styled.input`
  width: 22px;
  height: 22px;
`;

export const SendMeTxt = styled.div`
  line-height: 21px;
  color: rgb(18, 50, 98);
  font-size: 18px;
  font-weight: 300;
  margin-left: 10px;
`;

export const BottomContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 32px;
`;

const BtnCss = css`
  height: 30px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`;

export const DeclineBtn = styled.button`
  ${BtnCss};
  width: 138px;
  border: 1px solid rgb(216, 218, 222);
  color: #1F2329;
`;

export const AcceptBtn = styled.button`
  ${BtnCss};
  width: 98px;
  background-color: #50A75E;
  margin-left: 8px;
  color: white;
`;

const CallBack: React.FC<RouteComponentProps> = (props) => {
  const {location, history } = props;
  const [isChecked, setIsChecked] = useState(false);
  const params = new URLSearchParams(location.search);
  const code = params.get('code');
  if (!code) {
    history.push('/');
  }
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.post(`${config.url}/users/github-init`,
          {code},
          {withCredentials: true}
        );
        localStorage.setItem('userInfo', JSON.stringify(response.data));
      } catch (error) {
        console.error('errr', error);
        history.push('/');
      }
    }
    getUser();
  }, [code]);
  function handleChangeChk() {
    setIsChecked(!isChecked);
  }

  function onDecline() {
    localStorage.removeItem('userInfo');
    history.push('/');
  }

  function onAccept() {
    history.push('/home');
  }

  return (
    <Container>
      <Header>Please accept the terms of service to continue</Header>
      <MainContainer>
        <TitleContainer>
          <LogoImg src={logosvg} />
          <HeaderTitle>Nautilus <span>Cloud</span></HeaderTitle>
        </TitleContainer>
        <ContentContainer>
          <TermsCotent>
            By registering for and using NautilusCloud services, <br />
            I agree to the <LinkTxt>Terms of Service</LinkTxt> and <LinkTxt>Privacy Policy</LinkTxt>
          </TermsCotent>
          <CheckContent>
            <CheckBox type='checkbox' checked={isChecked} onChange={handleChangeChk} />
            <SendMeTxt>
              Send me Cryptonomic newsletter
            </SendMeTxt>
          </CheckContent>
          <BottomContent>
            <DeclineBtn onClick={onDecline}>Decline and Sign out</DeclineBtn>
            <AcceptBtn onClick={onAccept}>Accept terms</AcceptBtn>
          </BottomContent>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
};

export default withRouter(CallBack);
