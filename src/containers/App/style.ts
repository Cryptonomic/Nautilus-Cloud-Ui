
// import styled, { css } from 'styled-components';
import { styled, withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Waves1x from '../../assets/img/new/waves-background.png';
import Waves2x from '../../assets/img/new/waves-background@2x.png';
import Waves3x from '../../assets/img/new/waves-background@3x.png';
import Path from '../../assets/img/new/path-3.png'

import CustomIcon from '../../components/CustomIcon';
import { Z_BLOCK } from 'zlib';

export const Container = styled('div')({
  width: '100%',
  background: '#2a292e'
});

export const WelcomeContainer = styled(Grid)({
  width: '100%',
  height: 'calc(100vh - 85px)',
  marginTop: '85px'
});

export const LogoItem = styled(Grid)({
  marginTop: '125px'
});

export const TitleItem = styled(Grid)({
  marginTop: '24px'
});

export const DescriptonItem = styled(Grid)({
  marginTop: '19px'
});

export const LoginGithubButtonItem = styled(Grid)({
  marginTop: '65px'
});

export const FooterItem = styled(Grid)({
  margin: 'auto 0 45px'
});

export const GithubButton = withStyles({
  root: {
    width: '295px',
    height: '69px',
    lineHeight: 1.09,
    padding: '12px 8px'
  },
  label: {
      fontSize: '1.375rem',
  }
})(Button);

export const CreateApiButton = withStyles({
  root: {
    width: '273px',
    height: '48px',
    lineHeight: 1.5,
    padding: '12px 8px'
  },
  label: {
      fontSize: '1rem',
  }
})(Button);

export const DevelopmentContainer = styled(Grid)({
  marginTop: '45px'
});

export const ToolsContainer = styled(Grid)({
  marginTop: '45px'
});

export const FooterContainer = styled(Grid)({
  marginTop: '45px'
});

// export const Container = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background: #2a292e;
// `;

// export const HeaderContainer = styled.div`
//   width: 100%;
//   height: 434px;
//   background: radial-gradient(ellipse 100% 0% at 0% 0%, rgb(109, 118, 243) 0%, rgb(98, 108, 238) 100%);
//   position: relative;
//   padding-top: 60px;
//   text-align: center;
// `;

// export const HeaderCover = styled.div`
//   background: radial-gradient(ellipse 100% 200% at 100% 100%, rgba(146, 64, 197, 0) 0%, rgb(166, 64, 197) 100%);
//   position: absolute;
//   width: 100%;
//   height: 434px;
//   left: 0;
//   top: 0;
//   mix-blend-mode: multiply;
//   opacity: 0.43;
// `;

// const OvalCss = css`
//   background: rgb(90, 98, 225);
//   box-shadow: 0px 0px 44px 0px rgb(90, 98, 225);
//   border-radius: 50%;
//   position: absolute;
// `;

// export const HeaderOval1 = styled.div`
//   ${OvalCss};
//   width: 398px;
//   height: 398px;
//   left: -59px;
//   top: -72px;
// `;

// export const HeaderOval2 = styled.div`
//   ${OvalCss};
//   width: 159px;
//   height: 159px;
//   left: 31%;
//   top: 241px;
// `;

// export const HeaderOval3 = styled.div`
//   ${OvalCss};
//   width: 65px;
//   height: 65px;
//   left: 60%;
//   top: 49px;
//   box-shadow: none;
// `;

// export const LogoImg = styled.img`
//   height: 111px;
//   width: 159px;
// `;

// export const HeaderMain = styled.div`
//   position: relative;
//   z-index: 10;
// `;

// export const HeaderTitle = styled.p`
//   line-height: 50px;
//   color: rgb(255, 255, 255);
//   font-size: 42px;
//   font-family: 'Futura', sans-serif;
//   font-weight: 500;
//   text-transform: uppercase;
//   letter-spacing: 6.37px;
//   margin: 18px 0 0 0;
//   span {
//     color: rgb(186, 191, 255);
//   }
// `;

// export const HeaderDescription = styled.p`
//   width: 721px;
//   color: rgb(255, 255, 255);
//   font-size: 31px;
//   font-family: 'Roboto', sans-serif;
//   font-weight: 300;
//   text-align: center;
//   letter-spacing: 0px;
//   line-height: 39px;
//   margin: 18px auto 0 auto;
// `;

// export const MainContainer = styled.div`
//   width: 100%;
//   height: 542px;
//   background: white;
// `;

// export const AccessContainer = styled.div`
//   width: 665px;
//   height: 113px;
//   border: 5px solid rgba(58, 64, 169, 0.13);
//   margin: 0 auto;
//   position: relative;
//   top: -58px;
//   border-radius: 57px;
// `;

// export const AccessMainContainer = styled.div`
//   width: 655px;
//   height: 103px;
//   background-color: rgb(64, 72, 197);
//   border-radius: 52px;
//   padding: 0 23px 0 42px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const AccessTxt = styled.div`
//   line-height: 25px;
//   color: rgb(255, 255, 254);
//   font-size: 22px;
//   font-family: 'Roboto', sans-serif;
//   font-weight: 400;
//   letter-spacing: 0px;
// `;

// export const GithubBtn = styled.div`
//   background: rgb(0, 182, 234);
//   border-radius: 51.5px;
//   box-shadow: 0px 2px 4px 0px rgb(39, 46, 163);
//   height: 65px;
//   width: 291px;
//   padding: 18px;
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 24px;
//   color: rgb(237, 240, 247);
//   font-weight: 700;
// `;

// export const GithubImg = styled.img`
//   height: 32px;
//   width: 33px;
// `;

// export const ChevImg = styled.img`
//   height: 19px;
//   width: 11px;
// `;

// export const ChevGrImg = styled.img`
//   height: 13px;
//   width: 7px;
// `;

// export const MainContent = styled.div`
//   width: 1380px;
//   margin: -60px auto 0 auto;
//   display: flex;
//   justify-content: space-between;
// `;

// export const MainContentCol = styled.div`
//   width: 420px;
//   text-align: center;
// `;

// export const ContentTitleTxt = styled.div`
//   color: rgb(18, 50, 98);
//   font-size: 24px;
//   line-height: 28px;
//   font-weight: 500;
//   margin: 0;
// `;

// export const ContentDesTxt = styled.div`
//   color: rgb(18, 50, 98);
//   font-size: 18px;
//   font-weight: 300;
//   line-height: 25px;
//   margin-top: 12px;
// `;

// export const ContentDesHighlight = styled.div`
//   color: #17bcfc;
//   font-weight: 500;
//   display: inline-block;
//   cursor: pointer;
// `;
// const ImgCss = css`
//   height: 343px;
// `;
// export const MainImg1 = styled.img`
//   ${ImgCss};
//   width: 360px;
// `;
// export const MainImg2 = styled.img`
//   ${ImgCss};
//   width: 342px;
// `;
// export const MainImg3 = styled.img`
//   ${ImgCss};
//   width: 342px;
// `;

// export const MediumContainer = styled.div`
//   width: 100%;
//   height: 253px;
//   padding-top: 17px;
// `;

// export const MediumContent = styled.div`
//   margin: 0 auto;
//   width: 1316px;
//   padding-right: 25px;
//   display: flex;
// `;

// export const MediumTxtContainer = styled.div`
//   padding-top: 65px;
//   margin-right: auto;
// `;

// export const MediumContentTxt = styled.div`
//   color: rgb(18, 50, 98);
//   font-size: 24px;
//   font-weight: 300;
//   line-height: 34px;
// `;

// export const ExploreTxt = styled.div`
//   line-height: 21px;
//   color: rgb(23, 188, 252);
//   font-size: 18px;
//   font-weight: 500;
//   margin-top: 16px;
// `;


// export const AppImg = styled.img`
//   width: 693px;
//   height: 261px;
// `;

// export const BottomMainContainer = styled.div`
//   position: relative;
//   z-index: 10;
//   width: 1316px;
//   margin: 0 auto;
//   padding-right: 40px;
// `;

// export const BottomContainer = styled.div`
//   width: 100%;
//   height: 265px;
//   background: radial-gradient(ellipse 100% 0% at 0% 0%, rgb(109, 118, 243) 0%, rgb(98, 108, 238) 100%);
//   position: relative;
//   overflow: hidden;
//   padding-top: 42px;
// `;

// export const BottomAccessContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 0 auto;
//   width: 572px;
// `;

// export const SpLine = styled.div`
//   width: 100%;
//   height: 1px;
//   background-color: #FFFFFF;
//   margin: 32px 0 25px 0;
// `;
