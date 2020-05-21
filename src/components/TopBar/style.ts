import { styled, withStyles, makeStyles } from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

export const LogoButton = withStyles({
    root: {
        maxWidth: '220px',
        color: '#fff',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    label: {
        marginLeft: '5px',
    },
})(BottomNavigationAction);

export const LogoIcon = styled(Icon)({
    fontSize: '1.75rem',
});

export const LogoImg = styled('img')({});
