import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
}));

export const Title = styled(Typography)({
    fontFamily: "Roboto-Bold, sans-serif",
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "2px",
  });
