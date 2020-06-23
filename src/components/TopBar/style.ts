import { withStyles, styled } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
        height: '85px',
    },
}))(Toolbar);

export const AppBarWrapper: any = withStyles({
    root: {
        width: ({ drawer }: any) => `calc(100% - ${drawer ? drawer : 0}px)`,
    },
})(AppBar);

export const UserName = styled(Typography)({
    fontSize: '1.125rem',
    fontWeight: 500,
    letterSpacing: '1px',
    marginLeft: '5px',
});

export const LeftPanel = styled(Grid)({
    maxWidth: '650px',
});
