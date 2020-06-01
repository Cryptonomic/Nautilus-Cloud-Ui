import { withStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

export const LogoButton = withStyles({
    root: {
        maxWidth: '220px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    label: {
        marginLeft: '5px',
    },
})(BottomNavigationAction);

export const LoginButton = withStyles({
    root: {
        width: '80px',
        height: '40px',
        lineHeight: 0.75,
        padding: '12px 8px',
    },
    label: {
        fontSize: '0.875rem',
        textTransform: 'none',
    },
})(Button);

export const ToolbarWrapper = withStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            height: '85px',
        },
    },
}))(Toolbar);

export const AppBarWrapper: any = withStyles({
    root: {
        width: ({ drawer }: any) => `calc(100% - ${drawer ? drawer : 0}px)`,
    },
})(AppBar);
