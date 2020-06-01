import React from 'react';

interface Props {
    width: string;
    fill?: string;
    stroke?: string;
}

const CustomIcon = ({ Component, size, color1 = '', color2 = '' }) => {
    let props: Props = {
        width: size,
    };

    if (color1 || color2) {
        props = { ...props, fill: color1, stroke: color2 };
    }

    return <Component {...props} />
};

export default CustomIcon;
