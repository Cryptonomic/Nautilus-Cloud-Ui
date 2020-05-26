import { styled, Theme } from '@material-ui/core/styles';

export const Wrapper = styled('span')(({ size }: { size?: string }) => ({
    fontSize: size || 'inherit',
    width: !size ? '100%' : size,
    height: !size ? '100%' : size,
    display: 'flex',
    flexShrink: 0,
    justifyItems: 'center',
    alignItems: 'center',
    margin: 'auto',
    overflow: 'hidden',
    userSelect: 'none'
}));

export const Img = styled('img')({
    width: 'inherit',
    height: 'inherit'
});
