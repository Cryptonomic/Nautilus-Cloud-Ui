import { styled, withStyles } from '@material-ui/core/styles';
import TopBar from '../../components/TopBar';
import CustomImg from '../../components/CustomImg';
import CustomIcon from '../../components/CustomIcon';
import logo from '../../assets/img/new/logo.svg';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import statIcon from '../../assets/img/new/api-metering-icon.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import GithubIcon from '../../assets/img/new/sm_github_icon.svg';
import RiotIcon from '../../assets/img/new/sm_riot_icon.svg';
import TwitterIcon from '../../assets/img/new/sm_twitter_icon.svg';
import MediumIcon from '../../assets/img/new/sm_medium_icon.svg';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import bookIcon from '../../assets/img/new/book-icon.svg';
import programmingIcon from '../../assets/img/new/js-programming.svg';
import scriptIcon from '../../assets/img/new/script-code-coding.svg';
import copyIcon from '../../assets/img/new/copy-icon.svg';
import refreshIcon from '../../assets/img/new/refresh.svg';
import { ReactComponent as GearIcon } from '../../assets/img/new/gear-icon.svg';

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
}));

export const ListItemLarge = styled(ListItem)({
    flexDirection: 'column',
    margin: '30px 0px 40px',
});

export const ListItemLargeText = styled(ListItemText)(({ color }: { color?: string }) => ({
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: 0.69,
    marginTop: '14px',
    color: color,
}));

export const ListItemSmallText = styled(ListItemText)({
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 400,
});

export const ListItemSmall = styled(ListItem)({
    flexDirection: 'column',
    paddingLeft: 0,
    paddingRight: 0,
});

export const IconLarge = styled(ListItemIcon)({
    fontSize: '1.875rem',
    justifyContent: 'center',
});

export const SocialList = styled(List)({
    marginTop: 'auto',
});

export const Main = styled(Grid)(({ theme }) => ({
    padding: '85px 0px 50px 120px',
}));

export const TitleText = styled(Typography)({
    fontWeight: 600,
    letterSpacing: '4.85px',
});

export const Title = styled(Grid)({
    margin: '50px 0px 0px 230px',
});

export const Details = styled(Grid)({
    margin: '15px 0px 0px 230px',
});

export const Resources = styled(Grid)({
    margin: '80px 0px 0px 230px',
});

export const DetailsBg = styled(Paper)({
    backgroundColor: 'rgba(35, 35, 37, 0.78)',
    boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.5)',
    borderRadius: '3px',
    padding: '34px 22px 49px',
    maxWidth: '740px',
});

export const CustomSelect = withStyles({
    root: {
        padding: '7px 18px 9px',
    },
    select: {
        paddingRight: '65px !important',
    },
    icon: {
        color: '#fff',
        top: 'auto',
        marginRight: '12px',
    },
})(NativeSelect);

export const CustomInput = withStyles({
    root: {
        backgroundColor: '#57565a',
        borderRadius: '3px',
        boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.5)',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        textAlign: 'center',
    },
})(InputBase);

export const LinkText = styled(Typography)({
    fontSize: '1rem',
    fontWeight: 300,
    letterSpacing: '2px',
    color: '#c5d2de',
});

export const ApiKeyText = styled(Typography)({
    fontSize: '1rem',
    fontWeight: 300,
    letterSpacing: '2px',
    color: '#fff',
    maxWidth: '80%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});

export const LinkBox = styled(Grid)({
    backgroundColor: '#57565a',
    padding: '8px 18px 8px 9px',
    maxWidth: '448px',
});

export const ResourcesLinksContainer = styled(Grid)({
    marginTop: '50px',
});

export const ResourcesLinks = styled(Typography)({
    fontWeight: 300,
    letterSpacing: '3.03px',
    lineHeight: 1.85,
    maxWidth: '230px',
    textDecoration: 'underline',
    textAlign: 'center',
    marginTop: '20px',
});

export const ResourcesLinkItem = styled(Grid)({
    cursor: 'pointer',
});
