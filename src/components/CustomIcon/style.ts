import { styled, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

export const IconWrapper = styled(Icon)(({ size }: { size?: string }) => ({
    fontSize: size || 'inherit',
    width: !size ? '100%' : '',
    height: !size ? '100%' : '',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    margin: 'auto'
}));

export const IconImg = styled('img')({
    width: 'inherit',
    height: 'inherit'
});
