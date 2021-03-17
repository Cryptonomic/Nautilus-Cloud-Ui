import { styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import theme from "src/theme";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as CheckIcon } from "../../assets/img/check.svg";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

export const Wrapper = styled(Grid)({});

export const AccordionWrapper = withStyles({
  root: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid #4D4D4D",

    "&:last-child": {
      borderBottom: "none",
    },
  },
})(Accordion);

export const AccordionSummaryWrapper = styled(AccordionSummary)({
  "& p": {
    fontSize: "1rem",
  },
});

export const AccordionDetailsWrapper = styled(AccordionDetails)({
  "& p": {
    fontSize: "0.875rem",
  },
});
