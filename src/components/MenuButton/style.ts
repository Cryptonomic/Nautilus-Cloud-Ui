import { styled, withStyles, makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export const MenuListItemIcon = withStyles({
    root: {
        flex: 1,
        justifyContent: 'flex-end',
        color: '#fff',
        opacity: 0.5,
    },
})(ListItemIcon);
