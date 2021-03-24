import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { Direction, Plan } from '../../types';
export interface PriceItemProps {
    plan: Plan;
    label: string | ReactElement;
    items: string[];
    buttonLabel: string;
    selected: boolean;
    background: string;
    opacity?: number;
    direction?: Direction;
    style?: React.CSSProperties;
    onUpgrade?: () => void;
}

import {
    PriceItemWrapper,
    PlanWrapper,
    LabelWrapper,
    Item,
    ItemsWrapper,
    ItemLabel,
    ItemImage,
    ButtonWithCheckWrapper,
    ButtonWrapper,
} from './style';

const PriceItem: React.FC<PriceItemProps> = ({
    plan,
    label,
    items,
    buttonLabel,
    background,
    style,
    selected = false,
    opacity = 1,
    direction = Direction.Column,
    onUpgrade,
}) => {
    return (
        <PriceItemWrapper
            background={background}
            opacity={opacity}
            style={style}
            direction={direction}
        >
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
                style={{ width: 'auto' }}
            >
                <PlanWrapper
                    style={
                        direction === Direction.Row && plan === Plan.Pro
                            ? { marginLeft: '-2.5rem' }
                            : {}
                    }
                >
                    {plan}
                </PlanWrapper>
                <LabelWrapper>{label}</LabelWrapper>
            </Grid>
            <ItemsWrapper>
                {items.map((item, index) => {
                    return (
                        <Item key={index}>
                            <ItemImage />
                            <ItemLabel>{item}</ItemLabel>
                        </Item>
                    );
                })}
            </ItemsWrapper>
            {selected && (
                <ButtonWithCheckWrapper startIcon={<ItemImage style={{ marginRight: '0px' }} />}>
                    {buttonLabel}
                </ButtonWithCheckWrapper>
            )}
            {!selected && buttonLabel && <ButtonWrapper onClick={onUpgrade}>{buttonLabel}</ButtonWrapper>}
        </PriceItemWrapper>
    );
};

export default PriceItem;
