import { styled, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from 'src/theme';

export const Container = styled('div')({
    width: '100%',
    background: '#2a292e',
});

export const WelcomeContainer = styled(Grid)({
    width: '100%',
    height: 'calc(100vh - 85px)',
    marginTop: '85px',
});

export const WelcomeBg = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    marginTop: '85px',
    zIndex: 10,
});

export const WelcomeWrapper = styled(Grid)({
    zIndex: 20,
    width: 'inherit',
    height: 'inherit',
});

export const WelcomeLogoItem = styled(Grid)({
    marginTop: '125px',
});

export const WelcomeTitleItem = styled(Grid)({
    marginTop: '24px',
});

export const WelcomeDescriptonItem = styled(Grid)({
    marginTop: '19px',
    maxWidth: '556px',
});

export const WelcomeLoginGithubButtonItem = styled(Grid)({
    marginTop: '65px',
});

export const WelcomeFooterItem = styled(Grid)({
    margin: 'auto 0 45px',
});

export const WelcomeGithubButton = withStyles({
    root: {
        width: '295px',
        height: '69px',
        lineHeight: 1.09,
        padding: '12px 8px',
    },
    label: {
        fontSize: '1.375rem',
        textTransform: 'none',
    },
})(Button);

export const DevelopmentContainer = styled(Grid)({
    marginTop: '85px',
    padding: '0 160px',
});

export const DevelopmentLogoItem = styled(Grid)({
    marginTop: '45px',
});

export const DevelopmentTitleItem = styled(Grid)({
    marginTop: '28px',
    maxWidth: '979px',
});

export const DevelopmentSectionItem = styled(Grid)({
    marginTop: '140px',
});

export const DevelopmentSectionTitleItem = styled(Grid)({
    alignSelf: 'flex-start',
});

export const DevelopmentSectionIconWrapper = styled(Grid)({
    margin: '15px 0px',
});

export const DevelopmentSectionDescriptionItem = styled(Grid)({
    maxWidth: '471px',
});

export const DevelopmentSectionLinkItem = styled(Grid)({
    marginTop: '65px',
});

export const DevelopmentApiMeteringDesctiprion = styled(Grid)({
    maxWidth: '629px',
});

export const CreateApiButtonContainter = styled(Grid)({
    margin: '105px auto 55px',
});

export const CreateApiButton = withStyles({
    root: {
        width: '273px',
        height: '48px',
        lineHeight: 1.5,
        padding: '12px 8px',
    },
    label: {
        fontSize: '1rem',
        textTransform: 'none',
    },
})(Button);

export const LinkItem = styled(Typography)({
    textTransform: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
});

export const ToolsContainer = styled(Grid)({
    marginTop: '45px',
    backgroundColor: '#2d2c31',
    padding: '0 160px',
});

export const ToolsBoxes = styled(Grid)({
    margin: '80px 0',
});

export const ToolsLinkBox = styled(Grid)({
    cursor: 'pointer',
});

export const ToolsTitle = styled(Grid)({
    margin: '80px 0 130px',
});

export const ToolsLink = styled(Grid)({
    margin: '95px 0 80px',
});

export const FooterContainer = styled(Grid)({
    marginTop: '45px',
    padding: '0 160px',
});

export const FooterTitle = styled(Grid)({
    margin: '80px 0 270px',
    maxWidth: '997px',
});

export const FooterLine = styled('div')({
    width: '100%',
    height: '1px',
    backgroundColor: '#979797',
});

export const FooterList = withStyles((theme) => ({
    root: {
        margin: '25px 0 40px',
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
