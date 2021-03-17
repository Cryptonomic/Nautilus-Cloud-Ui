import { styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Wrapper = styled(Grid)({
  background: "#2F3035",
  border: "1px solid #4D4D4D",
  borderRadius: "8px",
  padding: "22px",
});

export const Description = styled(Typography)({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "20px",
});

export const LinearProgressWrapper = withStyles({
  root: {
    width: "100%",
    height: "23px",
    backgroundColor: "#3C3E43",
  },
  barColorPrimary: {
    background:
      "linear-gradient(90deg, rgba(82, 143, 245, 0.4) 0%, rgba(127, 86, 244, 0.4) 155.82%)",
  },
})(LinearProgress);
