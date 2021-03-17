import React from "react";
import {
  useHistory,
  useLocation,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { Container, ContentWrapper, Wrapper } from "./style";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import Keys from "./Keys";
import Stats from "./Stats";
import Account from "./Account";
import { UserInfo, AppState } from "../../types";
import { Footer, FooterLine } from "../../components/Footer";

const Home = () => {
  const userInfo = useSelector((state: AppState) => state.user.userInfo);
  const history = useHistory();
  const location = useLocation();
  const onLogout = () => {
    localStorage.removeItem("accessToken");
    history.push("/");
  };
  const drawerWidth = 184;
  const isRootPage = () => {
    return location.pathname === "/";
  };
  return (
    <Container>
      <SideBar drawer={drawerWidth} pathname={location.pathname} />
      <ContentWrapper>
        <TopBar
          isRootPage={isRootPage()}
          drawer={drawerWidth}
          background="#302F35"
          userEmail={userInfo?.email}
          onLogout={onLogout}
        />
        <Wrapper style={{minHeight: "calc(100% - 148px"}}>
          <Switch>
            <Route exact path="/home/keys">
              <Keys onLogout={onLogout} userInfo={userInfo} />
            </Route>
            <Route exact path="/home/account">
              <Account />
            </Route>
            <Redirect to={userInfo ? "/home/keys" : "/"} />
          </Switch>
        </Wrapper>
        <FooterLine />
        <Wrapper>
          <Footer />
        </Wrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
