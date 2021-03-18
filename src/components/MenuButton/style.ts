import { styled, withStyles, makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Link from '@material-ui/core/Link';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

export const MenuListItemIcon = withStyles({
    root: {
        flex: 1,
        justifyContent: 'flex-end',
        color: '#fff',
        opacity: 0.5,
    },
})(ListItemIcon);

export const LinkWrapper = styled(Link)({
    color: "white",
    fontSize: "16px",
    '&:hover': {
        textDecoration: "none",
        cursor: "Pointer"
    }
})

export const BottomNavigationActionWrapper = styled(BottomNavigationAction)({
    fontSize: "16px"
})
    