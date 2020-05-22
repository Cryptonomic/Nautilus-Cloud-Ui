import React from 'react';

import { IconWrapper, IconImg } from './style';

const CustomIcon = ({ src, name, size = '' }) => (
    <IconWrapper size={size}>
        <IconImg src={src} alt={name} />
    </IconWrapper>
);

export default CustomIcon;
