import { styled, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Keys styles
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

export const Modal = withStyles({
    paper: {
        width: '540px',
        backgroundColor: '#57565a',
    },
})(Dialog);

export const ModalDivider = styled(Divider)({
    backgroundColor: '#FFFFFF',
});

export const ModalTitle = styled(DialogTitle)({
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.25rem',
    fontWeight: 600,
    letterSpacing: '3.03px',
    padding: '23px 22px 5px',
});

export const ModalContent = styled(DialogContent)({
    padding: '18px 22px 45px',
});

export const ModalAskText = styled(Typography)({
    fontWeight: 500,
    lineHeight: 1.33,
    color: '#7dc0de',
});

export const ModalInfoText = styled(Typography)({
    lineHeight: 'normal',
    letterSpacing: 'normal',
    marginTop: '20px',
});

export const ModalActionsWrapper = styled(DialogActions)({
    padding: '0px 22px 15px',
});

export const ModalButtonAccept = withStyles({
    root: {
        width: '116px',
        height: '48px',
    },
    label: {
        textTransform: 'none',
        fontWeight: 500,
        lineHeight: 1.5,
    },
})(Button);

export const ModalButtonCancel = withStyles({
    root: {
        width: '116px',
        height: '48px',
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        '&:hover': {
            backgroundColor: '#4A494D',
        },
    },
    label: {
        textTransform: 'none',
        fontWeight: 500,
        lineHeight: 1.5,
    },
})(Button);

// Stats styles
export const StatsTabs = withStyles({
    root: {
        margin: '50px 0px 0px 135px',
    },
    indicator: {
        backgroundColor: '#499ce9',
    },
})(Tabs);

export const StatsTab = withStyles({
    root: {
        minWidth: '50px',
        padding: 0,
        margin: '0px 33px',
    },
    wrapper: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        fontSize: '1.25rem',
        textTransform: 'none',
    },
})(Tab);

export const TimeContainer = styled('div')({
    margin: '43px 175px 0px 168px',
});

export const RefreshButton = withStyles({
    root: {
        maxWidth: '220px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    label: {
        marginLeft: '5px',
        textTransform: 'uppercase',
        color: '#499ce9',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
    },
})(BottomNavigationAction);

export const TimeTextWrapper = styled(Grid)({
    marginTop: '40px',
});

export const TimeText = styled(Typography)({
    fontSize: '1rem',
    marginLeft: '10px',
    lineHeight: 'normal',
    letterSpacing: 'normal',
});

export const ChartContainer = styled('div')({
    margin: '50px 160px 0px 135px',
});

export const ChartBg = styled(Paper)({
    backgroundColor: '#232325',
    boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    padding: '25px 30px 15px',
});

export const ChartTitleContainer = styled(Grid)({
    marginLeft: '30px',
});

export const ChartTitle = styled(Typography)({
    letterSpacing: 'normal',
});

export const ChartSubtitle = styled(Typography)({
    fontSize: '1rem',
    letterSpacing: 'normal',
});

export const ChartLegendIcon = styled('div')(({ color }: { color: string }) => ({
    width: '12px',
    height: '12px',
    backgroundColor: color,
    display: 'inline-block',
}));

export const ChartLegendText = styled(Typography)({
    fontWeight: 500,
    marginLeft: '15px',
    display: 'inline-block',
});

export const ChartLineWrapper = styled('div')({
    marginTop: '18px',
});

export const BoxesContainer = styled('div')({
    margin: '64px 160px 0px 135px',
});
