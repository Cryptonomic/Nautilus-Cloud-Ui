
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ecf0f8;
`;

export const KeyContainer = styled.div`
  width: 100%;
  height: 363px;
  background: radial-gradient(ellipse 100% 0% at 0% 0%, rgb(109, 118, 243) 0%, rgb(98, 108, 238) 100%);
  position: relative;
  overflow: hidden;
`;

const OvalCss = css`
  background: rgb(90, 98, 225);
  box-shadow: 0px 0px 44px 0px rgb(90, 98, 225);
  border-radius: 50%;
  position: absolute;
`;

export const HeaderOval1 = styled.div`
  ${OvalCss};
  width: 398px;
  height: 398px;
  left: -59px;
  top: -72px;
`;

export const HeaderOval2 = styled.div`
  ${OvalCss};
  width: 159px;
  height: 159px;
  left: 31%;
  top: 241px;
`;

export const HeaderOval3 = styled.div`
  ${OvalCss};
  width: 65px;
  height: 65px;
  left: 60%;
  top: 49px;
  box-shadow: none;
`;

export const KeyMainContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 923px;
  margin: 0 auto;
  padding-top: 37px;
`;

export const ApiTxt = styled.p`
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 30px;
  margin: 0;
`;

export const EnvRowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const MainContainer = styled.div`
  width: 100%;
  background: white;
  padding: 36px 0 50px 0;
  flex: 1;
`;

export const MainContent = styled.div`
  width: 923px;
  margin: 0 auto;
`;

export const StartedTxt = styled.p`
  color: rgb(18, 50, 98);
  font-size: 24px;
  font-weight: 300;
  line-height: 28px;
  margin: 0;
`;


export const TabContainer = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const TabContent = styled.div`
  margin-top: 19px;
  width: 100%;
  display: flex;
`;

export const TabLine = styled.div`
  width: 115px;
  height: 3px;
  background: rgb(237, 240, 247);
  margin-top: 52px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 109px;
  padding-top: 43px;
  background: radial-gradient(ellipse 100% 0% at 0% 0%, rgb(109, 118, 243) 0%, rgb(98, 108, 238) 100%);
`;

export const FooterMain = styled.div`
  max-width: 1266px;
  min-width: 923px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const ResTxt = styled.p`
  color: rgb(3, 50, 102);
  font-size: 24px;
  font-weight: 300;
  line-height: 28px;
  margin: 36px 0 0 0;
`;

export const ResContainer = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
`;

export const ResColum = styled.div`
  width: 452px;
  border: 1px solid rgb(238, 238, 238);
  padding: 29px 0 7px 0;
  display: flex;
`;

export const ResContent = styled.div`
  margin-left: 40px;
  padding: 0 50px 43px 0;
  display: flex;
  flex-direction: column;
`;

export const ResTitle = styled.p`
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`;

export const ResDesTxt = styled.div`
  color: rgb(0, 62, 70);
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

export const LearnMore = styled.div`
  display: inline-flex;
  align-items: center;
  color: rgb(0, 192, 255);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  margin-top: 19px;
  width: 97px;
  cursor: pointer;
`;

export const ChevIcon = styled.img`
  height: 12px;
  width: 7px;
  margin-left: 6px;
`;
