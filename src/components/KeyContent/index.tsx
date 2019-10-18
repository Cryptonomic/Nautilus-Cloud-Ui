import React from 'react';
import styled, { css } from 'styled-components';
import { copyTxt } from '../../utils/general';

import cloneSvg from '../../assets/img/util-clone_icon.svg';
import refreshSvg from '../../assets/img/util-refresh_icon.svg';

const Container = styled.div`
  width: 452px;
  background: rgb(253, 253, 253);
  border-radius: 3px;
  border: 1px solid rgb(238, 238, 238);
  padding: 20px 24px 0 22px;
`;

const TitleTxt = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  font-weight: 500;
  margin: 0;
  text-transform: capitalize;
`;

const RowContainer = styled.div`
  width: 100%;
  margin-top: 11px;
  display: flex;
  align-items: center;
`;

const CircleDiv = styled.div`
  background: rgb(80, 227, 194);
  height: 12px;
  width: 12px;
  border-radius: 6px;
`;

const NetworkTitle = styled.div`
  margin-left: 6px;
  font-weight: 500;
  color: rgb(155, 155, 155);
  font-size: 16px;
  line-height: 19px;
`;

const CopyImgCss = css`
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

const CopyImg1 = styled.img`
  ${CopyImgCss};
  margin-left: 4px;
`;

const CopyImg2 = styled.img`
  ${CopyImgCss};
  margin-left: auto;
`;

const UrlTxt = styled.p`
  margin: 4px 0 0 0;
  color: rgb(23, 188, 252);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const KeyContainer = styled.div`
  border-top: 1px solid rgb(237, 240, 247);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 0 7px 0;
  margin-top: 15px;
`;

const KeyTitleTxt = styled.p`
  color: rgb(155, 155, 155);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;
const ContentContainer = styled.div`
  border-radius: 1px;
  border: 1px solid rgb(237, 240, 247);
  height: 32px;
  width: 307px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

const KeyTxt = styled.p`
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  margin: 0;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RefrehIcon = styled.img`
  height: 16px;
  width: 14px;
  cursor: pointer;
`;

const urls = {
  prod: {
    conseil: 'https://conseil-prod.cryptonomic-infra.tech/',
    tezos: 'https://tezos-prod.cryptonomic-infra.tech/'
  },
  dev: {
    conseil: 'https://conseil-dev.cryptonomic-infra.tech/',
    tezos: 'https://tezos-dev.cryptonomic-infra.tech/'
  },
};


interface Props {
  env: string;
  apiKey: string;
  onRefresh: () => void;
}

const KeyContent: React.FC<Props> = (props) => {
  const { env, apiKey, onRefresh } = props;
  const networkName = env === 'prod' ? 'Mainnet' : 'Alphanet';
  return (
    <Container>
      <TitleTxt>{env}</TitleTxt>
      <RowContainer>
        <CircleDiv />
        <NetworkTitle>Conseil {networkName} Node</NetworkTitle>
        <CopyImg1 src={cloneSvg} onClick={() => copyTxt(urls[env].conseil)} />
      </RowContainer>
      <UrlTxt>{urls[env].conseil}</UrlTxt>
      <RowContainer>
        <CircleDiv />
        <NetworkTitle>Tezos {networkName} Node</NetworkTitle>
        <CopyImg1 src={cloneSvg} onClick={() => copyTxt(urls[env].tezos)} />
      </RowContainer>
      <UrlTxt>{urls[env].tezos}</UrlTxt>
      <KeyContainer>
        <KeyTitleTxt>API Key</KeyTitleTxt>
        <ContentContainer>
          <KeyTxt>{apiKey}</KeyTxt>
          <CopyImg2 src={cloneSvg} onClick={() => copyTxt(apiKey)} />
        </ContentContainer>
        <RefrehIcon src={refreshSvg} onClick={onRefresh} />
      </KeyContainer>
    </Container>
  );
};

export default KeyContent;