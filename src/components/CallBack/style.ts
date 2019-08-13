import { styled } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
}));

export const Header = styled('div')(({ theme }) => ({
    width: '100%',
    height: '92px',
    background: theme.palette.background.paper,
    lineHeight: '28px',
    color: theme.palette.grey[50],
    fontSize: '24px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const MainContainer = styled('div')({
    width: '100%',
    marginTop: '116px',
});

export const TitleContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const LogoContainer = styled('span')({
    marginRight: '5px',
});

export const ContentContainer = styled('div')({
    width: '550px',
    height: '257px',
    background: 'rgb(255, 255, 255)',
    border: '1px solid rgb(216, 218, 222)',
    borderRadius: '0px',
    margin: '23px auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
});
export const TermsContent = styled('div')({
    margin: '40px 43px 20px',
    lineHeight: 1.25,
    color: 'rgb(18, 50, 98)',
    fontSize: '1.25rem',
    fontWeight: 300,
});

export const CustomDivider = styled(Divider)({
    backgroundColor: '#d8dade',
    margin: '0 25px',
});

export const LinkTxt = styled('div')({
    color: '#499ce9',
    display: 'inline-block',
    cursor: 'pointer',
});

export const CheckContent = styled('div')({
    height: '76px',
    paddingLeft: '29px',
    display: 'flex',
    alignItems: 'center',
});

export const SendMeTxt = styled('div')({
    lineHeight: 1.39,
    color: '#2a292e',
    fontSize: '1.125rem',
    fontWeight: 300,
    maxWidth: '426px',
    marginLeft: '5px',
});

export const BottomContent = styled('div')({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '32px',
    backgroundColor: 'rgba(197, 210, 222, 0.2)',
    '& button': {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '0.75rem',
        fontWeight: 500,
    },
});

export const DeclineBtn = styled('button')({
    height: '35px',
    borderRadius: '3px',
    outline: 'none',
    cursor: 'pointer',
    width: '155px',
    border: 'none',
    color: '#2d2c31',
    backgroundColor: 'rgba(224, 224, 224, 1)',
});

export const AcceptBtn = styled('button')({
    height: '35px',
    borderRadius: '3px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    width: '110px',
    backgroundColor: 'rgba(20, 170, 85, 1)',
    marginLeft: '8px',
    color: 'white',
});
