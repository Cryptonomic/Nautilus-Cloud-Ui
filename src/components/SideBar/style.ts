import { styled, makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const MainList = withStyles({
    root: {
        '& a': {
            color: '',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            '&:link': {
                color: 'transparent'
            },
            '&:visited': {
                color: 'tansparent'
            },
            '&:hover': {
                color: 'transparent'
            },
            '&:active': {
                color: 'transparent'
            }
        }
    }
})(List)

export const IconWrapper = styled('div')({
    margin: '0 auto'
})

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
            width: (drawer: number) => `calc(100% - ${drawer}px)`,
            marginRight: (drawer: number) => drawer,
        },
        drawer: {
            width: (drawer: number) => drawer,
            flexShrink: 0,
        },
        drawerPaper: {
            width: (drawer: number) => drawer,
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
