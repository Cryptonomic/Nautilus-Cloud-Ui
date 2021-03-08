import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import { Container } from './style';
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import Keys from './Keys';
import Stats from './Stats';
import { UserInfo, AppState } from '../../types';
import { Route, Redirect, Switch } from 'react-router-dom';

const Home = () => {
    const userInfo = useSelector((state: AppState) => state.user.userInfo)
    const history = useHistory();
    const location = useLocation();
    const onLogout = () => {
        localStorage.removeItem('accessToken');
        history.push('/');
    }

    const drawerWidth = 120;

    return (
        <Container>
            <TopBar drawer={drawerWidth} userEmail={userInfo?.email} onLogout={onLogout} />
            <SideBar drawer={drawerWidth} pathname={location.pathname}/>
            <Switch>
                <Route exact path="/home/keys"><Keys onLogout={onLogout} userInfo={userInfo} /></Route>
                <Route exact path="/home/stats"><Stats /></Route>
                <Redirect to={userInfo ? "/home/keys" : "/"} />
            </Switch>
        </Container>
    )
}

export default Home;
