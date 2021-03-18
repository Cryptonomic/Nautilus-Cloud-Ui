import { styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";

export const Wrapper = styled(Grid)({
  marginTop: "2rem",
});

export const Title = styled(Typography)({
  fontSize: "1rem",
  lineHeight: "1rem",
  fontFamily: "Montserrat",
  fontWeight: 500,
  marginBottom: "1.5rem",
});

export const TableContainerWrapper = styled(TableContainer)({
  "& tr th": {
    borderBottom: "1px solid #4D4D4D"
  },
  "& tr :first-child": {
    paddingLeft: "0"
  },
})
export const TableCellWrapper = styled(TableCell)({
  border: "none",
  fontSize: "1rem",
  lineHeight: "1rem",
  fontFamily: "Montserrat",
  fontWeight: 300,
  marginBottom: "1.5rem",
  backgroundColor: "transparent",
  color: "#fff",
  "&.action": {
    color: "#499CE9",
    "&:hover": {
      cursor: "Pointer"
    }
  }
});
