import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, withStyles, TableRow, TableCell } from '@material-ui/core';

export const BoxBg = styled(Paper)({
    backgroundColor: '#232325',
    boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    padding: '30px 21px 45px',
});

export const Title = styled(Typography)({
    letterSpacing: 'normal',
    margin: '0 16px',
});

export const TableHeadCell = withStyles({
    root: {
        borderBottom: '3px solid #499ce9',
        paddingBottom: '0px',
        fontSize: '1rem',
        letterSpacing: 'normal',
    },
})(TableCell);

export const TableBodyCell = withStyles({
    root: {
        border: 'none',
        fontSize: '1rem',
        fontWeight: 400,
        letterSpacing: 'normal',
        color: '#c5d2de',
        paddingBottom: '0px',
    },
})(TableCell);
