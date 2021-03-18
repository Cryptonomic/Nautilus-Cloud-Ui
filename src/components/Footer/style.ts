import { styled, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from 'src/theme';
import Typography from '@material-ui/core/Typography';

export const FooterWrapper = styled('div')({
})
export const FooterContainer = styled(Grid)({
    marginTop: '0px',
    padding: '0 0px',
});

export const FooterTitle = styled(Grid)({
    margin: '80px 0 270px',
    maxWidth: '997px',
});

export const FooterLine = styled('div')({
    width: '100%',
    height: '1px',
    backgroundColor: '#4D4D4D',
});

export const FooterList = withStyles((theme) => ({
    root: {
        margin: '13px 0',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
        },
    },
}))(Grid);

export const FooterSocial = withStyles((theme) => ({
    root: {
        justifyContent: 'center',
        marginTop: 10,
        width: '140px',
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
        },
    },
}))(Grid);

export const FooterLink = styled('span')({
    cursor: 'pointer',
});

export const FooterSocialLink = styled('span')({
    cursor: 'pointer',
    margin: '0 7px',
});

export const FooterTerms = styled(Typography)({
    marginTop: '10px',
    [theme.breakpoints.up('md')]: {
        margin: '0px 50px 0px auto',
    },
});

export const FooterPolicy = styled(Typography)({
    marginTop: '10px',
    [theme.breakpoints.up('md')]: {
        marginTop: 0,
    },
});