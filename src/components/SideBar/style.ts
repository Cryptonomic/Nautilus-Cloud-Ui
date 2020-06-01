import { styled, makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

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

export const useSideBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: (props: any) => `calc(100% - ${props.width}px)`,
            marginRight: (props: any) => props.width,
        },
        drawer: {
            width: (props: any) => props.width,
            flexShrink: 0,
        },
        drawerPaper: {
            width: (props: any) => props.width,
            border: 'none',
            backgroundColor: '#1e1e1e',
            '& hr': {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: {
            ...theme.mixins.toolbar,
            height: '85px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    })
);
