import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Plan } from '../../types';

export interface MembershipCardProps {
    plan: Plan;
    fee: number;
    style?: React.CSSProperties;
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

import { Wrapper, Label, Line, PayButton } from './style';

const planNames = {
    1: 'Basic',
    2: 'Pro',
};

const MembershipCard: React.FC<MembershipCardProps> = ({ plan, fee, style, disabled, label, onClick }) => {
    return (
        <Wrapper>
            <Grid
                container
                justify="space-between"
                direction="row"
                style={{ padding: '0 1.5rem 1.5rem' }}
            >
                <Grid>
                    <Typography variant="h6">{planNames[plan]}</Typography>
                </Grid>
                <Grid>
                    <Typography variant="h6">{`$${fee}/Month`}</Typography>
                    <Label>Unlimited Requests</Label>
                </Grid>
            </Grid>
            <Line />
            <Grid container justify="space-between" direction="row" style={{ padding: '1.5rem' }}>
                <Grid container justify="space-between" style={{ padding: '1.5rem 0 3rem' }}>
                    <Label>Monthly Plan</Label>
                    <Label>{`$${fee.toFixed(2)}/month`}</Label>
                </Grid>
                <Grid container justify="space-between">
                    <Label>Total</Label>
                    <Label>{`$${fee.toFixed(2)}`}</Label>
                </Grid>
            </Grid>
            <Line />
            <Grid container alignItems="center" justify="center" style={{ padding: '1.5rem 0 0' }}>
                <PayButton disabled={disabled} onClick={onClick}>{label}</PayButton>
            </Grid>
        </Wrapper>
    );
};

export default MembershipCard;
