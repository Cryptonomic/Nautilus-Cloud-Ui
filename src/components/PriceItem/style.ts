import { styled, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as CheckIcon } from '../../assets/img/check.svg';

export const PriceItemWrapper = styled('div')({
    width: ({ direction }: any) => {
        return direction == 'row' ? '592px' : '323px';
    },
    height: ({ direction }: any) => {
        return direction == 'row' ? 'auto' : '319px';
    },
    background: ({ background }: any) => `${background}`,
    display: 'flex',
    flexDirection: ({ direction }: any) => {
        return direction == 'row' ? 'row' : 'column';
    },
    alignItems: 'center',
    justifyContent: ({ direction }: any) => {
        return direction == 'row' ? 'flex-start' : 'space-evenly';
    },
    border: '1px solid #4D4D4D',
    borderRadius: '8px',
    padding: '8px',
});

export const PlanWrapper = styled('div')({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    color: 'white',
});

export const LabelWrapper = styled('div')({
    fontFamily: 'Montserrat',
    fontSize: '32px',
    color: 'white',
    '& .month': {
        fontSize: '12px',
        fontFamily: 'Montserrat',
        fontWeight: 500,
        textTransform: 'capitalize',
    },
});

export const ItemsWrapper = styled('div')(({ isRow }: { isRow?: boolean }) => ({
    marginLeft: isRow ? '30px' : '',
}));

export const Item = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 0',
});

export const ItemLabel = styled(Typography)({
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '15px',
    letterSpacing: 'normal',
});

export const ItemImage = styled(CheckIcon)(({ color = '#528FF5'}: { color?: string}) => ({
    marginRight: '9px',
    stroke: color,
}));

export const ButtonWithCheckWrapper = withStyles({
    root: {
        background:
            'linear-gradient(90deg, rgba(82, 143, 245, 0.4) 0%, rgba(127, 86, 244, 0.4) 155.82%)',
        padding: '8px 15px',
        textTransform: 'none',
        color: 'white',
        borderRadius: '0px',
        cursor: 'default',
        '&:hover': {
            background: 'linear-gradient(90deg, rgba(82, 143, 245, 0.4) 0%, rgba(127, 86, 244, 0.4) 155.82%)',
        },
        marginLeft: (props: any) => props.isRow ? 'auto' : '',
    },
    label: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
    },
})(Button);

export const ButtonWrapper = withStyles({
    root: {
        background: '#61A9E9',
        border: '1px solid #61A9E9',
        borderRadius: '8px',
        padding: '8px 15px',
        marginLeft: (props: any) => props.isRow ? 'auto' : '',
    },
    label: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        textAlign: 'center',
        letterSpacing: '1px',
        textTransform: 'none',
    },
})(Button);

export const AwaitingPaymentText = styled('div')({
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    marginLeft: 'auto',
    width: '100px',
})
