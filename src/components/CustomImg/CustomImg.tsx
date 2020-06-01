import React from 'react';

import { Wrapper, Img } from './style';

const CustomIcon = ({
    src,
    name,
    size,
    maxwidth,
    margin,
    onClick,
}: {
    src: string[] | string;
    name: string;
    size?: string;
    maxwidth?: string;
    margin?: string;
    onClick?: () => void;
}) => {
    let srcSet = null;

    if (Array.isArray(src)) {
        srcSet = src.map((item, index) => `${item} ${index + 1}x`).join(', ');
    }

    return (
        <Wrapper size={size} maxwidth={maxwidth} margin={margin} onClick={onClick}>
            <Img srcSet={srcSet || src} alt={name} />
        </Wrapper>
    );
};

export default CustomIcon;
