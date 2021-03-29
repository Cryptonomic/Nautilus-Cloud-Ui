import { styled, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { FullscreenExit } from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";

// Keys styles
export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  background: theme.palette.background.default,
}));

export const ListItemLarge = styled(ListItem)({
  flexDirection: "column",
  margin: "30px 0px 40px",
});

export const ListItemLargeText = styled(ListItemText)(
  ({ color }: { color?: string }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: 0.69,
    marginTop: "14px",
    color: color,
  })
);

export const ListItemSmallText = styled(ListItemText)({
  fontFamily: "Roboto, sans-serif",
  fontSize: "0.875rem",
  fontWeight: 400,
});

export const ListItemSmall = styled(ListItem)({
  flexDirection: "column",
  paddingLeft: 0,
  paddingRight: 0,
});

export const IconLarge = styled(ListItemIcon)({
  fontSize: "1.875rem",
  justifyContent: "center",
});

export const SocialList = styled(List)({
  marginTop: "auto",
});

export const Main = styled(Grid)(({ theme }) => ({
  marginTop: "100px",
  // padding: '85px 0px 50px 120px',
}));

export const TitleText = styled(Typography)({
  fontFamily: "Roboto-Bold, sans-serif",
  fontSize: "1.5rem",
  fontWeight: "bold",
  letterSpacing: "2px",
});

export const Title = styled(Grid)({
  // margin: '50px 0px 0px 230px',
});

export const Details = styled(Grid)({
  // margin: '15px 0px 0px 230px',
  marginTop: "32px",
  display: "flex",
  column: "row",
  justifyContent: "center",
});

export const Resources = styled(Grid)({
  // margin: '80px 0px 0px 230px',
});

export const DetailsBg = styled(Paper)({
  backgroundColor: "#2F3035",
  borderRadius: "8px",
  padding: "34px 22px 0px",
  minWidth: "648px",
  border: "1px solid #4D4D4D",
});

export const CustomSelect = withStyles({
  root: {
    padding: "0px 0px 0px 1rem",
  },
  icon: {
    fontSize: "24px",
    color: "#fff",
    top: "auto",
    marginRight: "8px",
  },
})(Select);

export const CustomInput = withStyles({
  root: {
    width: "125px",
    backgroundColor: "#57565a",
    borderRadius: "3px",
    fontFamily: "Roboto-Medium, sans-serif",
    fontWeight: 500,
    letterSpacing: "0px",
    fontSize: "1rem",
    lineHeight: "35px",
  },
})(InputBase);

export const CustomMenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#57565a",
      boxShadow: "none",
    },
  },
};

export const CustomMenuItem = withStyles({
  root: {
    fontFamily: "Roboto-Medium, sans-serif",
    fontWeight: 500,
    letterSpacing: "0px",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.35)",
    },
    "&$selected": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  selected: {},
})(MenuItem);

export const LinkText = styled(Typography)({
  fontFamily: "Roboto-Light, sans-serif",
  fontSize: "1rem",
  fontWeight: 300,
  letterSpacing: "0px",
  color: "#CEDFED",
});

export const ApiKeyText = styled(Typography)({
  fontFamily: "Montserrat",
  fontSize: "1rem",
  fontWeight: 300,
  color: "#fff",
  maxWidth: "80%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  letterSpacing: "0.01em",
});

export const LinkBox = styled(Grid)({
  backgroundColor: "rgba(75, 77, 83, 0.5)",
  padding: "8px 18px 8px 9px",
  maxWidth: "448px",
});

export const ResourcesLinksContainer = styled(Grid)({
  marginTop: "50px",
});

export const ResourcesLinks = styled(Typography)({
  fontWeight: 300,
  letterSpacing: "3.03px",
  lineHeight: 1.85,
  maxWidth: "230px",
  textDecoration: "underline",
  textAlign: "center",
  marginTop: "20px",
});

export const ResourcesLinkItem = styled(Grid)({
  cursor: "pointer",
  margin: "25px",
});

export const Modal = withStyles({
  paper: {
    width: "512px",
    backgroundColor: "#3C3E43",
  },
})(Dialog);

export const ModalDivider = styled(Divider)({
  backgroundColor: "#FFFFFF",
});

export const ModalTitle = styled(DialogTitle)({
  fontFamily: "Montserrat",
  fontSize: "1.5rem",
  fontWeight: 500,
  letterSpacing: "2px",
  lineHeight: "29px",
  padding: "24px 0",
  textAlign: "center",
});

export const ModalContent = styled(DialogContent)({
  padding: "0px 22px 45px",
});

export const ModalAskText = styled(Typography)({
  fontFamily: "Roboto-Bold, sans-serif",
  fontSize: "1.125rem",
  letterSpacing: "0px",
  fontWeight: 500,
  lineHeight: 1.33,
  color: "#7dc0de",
});

export const ModalInfoText = styled(Typography)({
  lineHeight: "1.25rem",
  letterSpacing: "normal",
  fontSize: "1rem",
});

export const ModalActionsWrapper = styled(DialogActions)({
  padding: "0px 22px 1.875rem",
  alignItems: "center",
  justifyContent: "center",
});

export const ModalButtonAccept = withStyles({
  root: {
    backgroundColor: "#61A9E9",
    padding: "0",
    marginLeft: "1.5rem !important",
  },
  label: {
    textTransform: "none",
    fontWeight: 500,
    lineHeight: "1.25rem",
    fontSize: "1rem",
    padding: "0.625rem 1rem",
  },
})(Button);

export const ModalButtonCancel = withStyles({
  root: {
    backgroundColor: "transparent",
    border: "1px solid #61A9E9",
    "&:hover": {
      backgroundColor: "#4A494D",
    },
    padding: "0",
  },
  label: {
    textTransform: "none",
    fontWeight: 500,
    lineHeight: "1.25rem",
    fontSize: "1rem",
    padding: "0.625rem 1.59rem",
    color: "#61A9E9",
  },
})(Button);

// Stats styles
export const StatsTabs = withStyles({
  root: {
    margin: "50px 0px 0px 135px",
  },
  indicator: {
    backgroundColor: "#499ce9",
  },
})(Tabs);

export const StatsTab = withStyles({
  root: {
    minWidth: "50px",
    padding: 0,
    margin: "0px 33px",
  },
  wrapper: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "1.25rem",
    textTransform: "none",
  },
})(Tab);

export const TimeContainer = styled("div")({
  margin: "43px 175px 0px 168px",
});

export const RefreshButton = withStyles({
  root: {
    maxWidth: "220px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    marginLeft: "5px",
    textTransform: "uppercase",
    color: "#499ce9",
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
  },
})(BottomNavigationAction);

export const TimeTextWrapper = styled(Grid)({
  marginTop: "40px",
});

export const TimeText = styled(Typography)({
  fontSize: "1rem",
  marginLeft: "10px",
  lineHeight: "normal",
  letterSpacing: "normal",
});

export const ChartContainer = styled("div")({
  margin: "50px 160px 0px 135px",
});

export const ChartBg = styled(Paper)({
  backgroundColor: "#232325",
  boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.5)",
  borderRadius: "5px",
  padding: "25px 30px 15px",
});

export const ChartTitleContainer = styled(Grid)({
  marginLeft: "30px",
});

export const ChartTitle = styled(Typography)({
  letterSpacing: "normal",
});

export const ChartSubtitle = styled(Typography)({
  fontSize: "1rem",
  letterSpacing: "normal",
});

export const ChartLegendIcon = styled("div")(
  ({ color }: { color: string }) => ({
    width: "12px",
    height: "12px",
    backgroundColor: color,
    display: "inline-block",
  })
);

export const ChartLegendText = styled(Typography)({
  fontWeight: 500,
  marginLeft: "15px",
  display: "inline-block",
});

export const ChartLineWrapper = styled("div")({
  marginTop: "18px",
});

export const BoxesContainer = styled("div")({
  margin: "64px 160px 0px 135px",
});

export const EndopointsSelectContainer = styled(Grid)({
  paddingLeft: "25px",
});

export const ContentWrapper = styled("div")({
  width: "100%",
});

export const Wrapper = styled("div")({
  padding: "0 20px",
});

export const TabContainer = styled("div")({
  width: "100%",
  borderBottom: "1px solid #4D4D4D",
  marginTop: "10px",
});

export const TabsWrapper = withStyles({
  root: {
    backgroundColor: "transparent",
  },
  indicator: {
    backgroundColor: "#61A9E9",
    height: "1px",
  },
})(Tabs);
export const TabContent = styled("div")({});
export const TabWrapper = withStyles({
  root: {
    fontSize: "1rem",
    textTransform: "capitalize",
    minWidth: "auto",
    padding: "6px 0px",
    margin: "0px 25px 0px 0px",
    '&:hover': {
      opacity: 0.5
    }
  },
})(Tab);

export const SubTitle = styled(Typography)({
  fontSize: "1rem",
  lineHeight: "1rem",
  fontFamily: "Montserrat",
  fontWeight: 500,
});

export const CopyText = styled(Typography)({
  fontSize: "12px",
  lineHeight: "15px",
  fontFamily: "Montserrat",
  fontWeight: 300,
});

export const GenerateKeyButton = withStyles({
  root: {
    width: "128px",
    height: "40px",
    color: "#61A9E9",
    lineHeight: 0.75,
    padding: "12px 8px",
    border: "1px solid #61A9E9",
    borderRadius: "8px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#61A9E9",
      color: "white",

      "& .btnIcon path": {
        fill: "white",
      },
    },
  },
  label: {
    fontSize: "1rem",
    fontWeight: 500,
    textTransform: "capitalize",
  },
})(Button);

export const TestnetInfo = styled(Typography)({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "1rem",
  lineHeight: "20px",
  color: "#499CE9",
  marginLeft: "1.125rem",
});

export const PriceTable = styled(Grid)({
  marginBottom: "3.75rem",
});

export const Hint = styled(Typography)({
  fontSize: "0.875rem",
  fontFamily: "Montserrat",
  lineHeight: "1.0625rem",
  fontWeight: 500,
  letterSpacing: "normal",

  "&.caution": {
    color: "#D96378",
  },

  "& span": {
    color: "#61A9E9",
  },
});

export const BillingInfoWrapper = styled(Grid)({
  marginTop: "2rem",
  "& .info": {
    borderTop: "1px solid #4D4D4D",
    borderBottom: "1px solid #4D4D4D",
  },
  "& .wrapper": {
    padding: "1rem 0",
    "& .small": {
      marginTop: "1.5rem",
      fontSize: "0.75rem",
    },

    "&.left": {
      width: "22rem",
      borderRight: "1px solid #4D4D4D",

      "& h5": {
        marginTop: "1.5rem",
      },
    },
    "&.right": {
      width: "22rem",
      paddingLeft: "2rem",
    },
  },
});

export const SmallText = styled(Typography)({
  fontSize: "0.75rem",
});
