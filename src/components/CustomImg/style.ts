import { styled } from '@material-ui/core/styles';

export const Wrapper = styled('span')(
    ({
        size,
        maxwidth,
        margin,
        onClick,
    }: {
        size?: string;
        maxwidth?: string;
        margin?: string;
        onClick?: () => void;
    }) => ({
        fontSize: size || 'inherit',
        width: !size ? '100%' : size,
        height: maxwidth ? 'auto' : !size ? '100%' : size,
        maxWidth: maxwidth || '',
        display: 'flex',
        flexShrink: 0,
        justifyItems: 'center',
        alignItems: 'center',
        margin: margin || 'auto',
        overflow: 'hidden',
        userSelect: 'none',
        cursor: onClick ? 'pointer' : '',
    })
);

export const Img = styled('img')({
    width: 'inherit',
    height: 'inherit',
});
