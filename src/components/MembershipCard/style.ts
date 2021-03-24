import { styled, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import theme from 'src/theme';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled(Grid)({
    marginTop: '2rem',
    background: '#2F3035',
    border: '1px solid #4D4D4D',
    borderRadius: '8px',
    padding: '2rem 0',
    width: '27.5rem',
});

export const Label = styled(Typography)({
    fontSize: '1rem',
    fontFamily: 'Montserrat',
    lineHeight: '1.25rem',
    fontWeight: 500,
    letterSpacing: '0.0625rem',
});

export const Line = styled('div')({
    width: '100%',
    height: '1px',
    backgroundColor: '#4D4D4D',
});

export const PayButton = withStyles({
    root: {
        background: '#528FF5',
        border: '1px solid #528FF5',
        borderRadius: '8px',
        padding: '0',
        '&:hover': {
            background: 'rgba(82, 143, 245, 0.5)',
        },
    },
    label: {
        fontSize: '1rem',
        fontFamily: 'Montserrat',
        lineHeight: '1.25rem',
        fontWeight: 500,
        letterSpacing: '0.0625rem',
        padding: '0.5rem 1.2rem',
        textTransform: 'none',
    },
    disabled: {
        opacity: 0.8,
    },
})(Button);
