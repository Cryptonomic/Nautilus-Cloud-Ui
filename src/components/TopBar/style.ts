import { withStyles, styled } from "@material-ui/core/styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as ArrowDownIcon } from "../../assets/img/arrow-down.svg";
import { ReactComponent as GithubIconWhite } from "../../assets/img/sm_github_icon.svg";

export const LogoButton = withStyles({
  root: {
    maxWidth: "220px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    marginLeft: "5px",
  },
})(BottomNavigationAction);

export const LoginButton = withStyles({
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
    "& .btnIcon": {
      marginRight: "8px",
    },
  },
  label: {
    fontSize: "0.875rem",
    textTransform: "none",
  },
})(Button);

export const ToolbarWrapper = withStyles((theme) => ({
  root: {
    height: "68px",
  },
}))(Toolbar);

export const AppBarWrapper: any = withStyles({
  root: {
    width: ({ drawer }: any) => `calc(100% - ${drawer ? drawer : 0}px)`,
    backgroundColor: ({ background }: any) => `${background}`,
    boxShadow: "none",

    "&.float": {
      backgroundColor: "#2a292e",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    },
  },
})(AppBar);

export const UserName = styled(Typography)({
  fontSize: "1.125rem",
  fontWeight: 500,
  letterSpacing: "1px",
  marginLeft: "5px",
  '&:hover': {
    opacity: 0.5,
  }
});

export const LeftPanel = styled(Grid)({
  maxWidth: "650px",
});

export const RightPanel = styled(Grid)({
  maxWidth: "650px",
});

export const CenterPanel = styled(Grid)({
  maxWidth: "380px",
});

export const ArrowDownIconWrapper = styled(ArrowDownIcon)({
  marginLeft: "10px",
});

export const MenuGridWrapper = styled(Grid)({
  fontSize: "16px",
  '&:hover': {
    opacity: 0.5,
  }
});

export const GithubIconWhiteWrapper = styled(GithubIconWhite)({});

export const TopBarText = styled('span')({
  '&:hover': {
    opacity: 0.5,
  }
});

export const ChatLink = styled('a')({
  textDecoration: 'none',
  color: 'white',
  '&:hover': {
    opacity: 0.5,
  }
});
