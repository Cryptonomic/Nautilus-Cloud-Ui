import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container } from './style';
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import Keys from './Keys';
import Stats from './Stats';

import { User } from '../../types';
import { Route, Redirect, Switch } from 'react-router-dom';

const Home = (props) => {
    const { history, location } = props;
    const userStringInfo = localStorage.getItem('userInfo');
    let userInfo: User = { userEmail: '' };
    if (userStringInfo) {
        userInfo = JSON.parse(userStringInfo);
    };

    const onLogout = () => {
        localStorage.removeItem('userInfo');
        history.push('/');
    }

    const drawerWidth = 120;

    return (
        <Container>
            <TopBar drawer={drawerWidth} userEmail={userInfo.userEmail} onLogout={onLogout} />
            <SideBar drawer={drawerWidth} pathname={location.pathname}/>
            <Switch>
                <Route exact path="/home/keys"><Keys onLogout={onLogout} userInfo={userInfo} /></Route>
                <Route exact path="/home/stats"><Stats /></Route>
                <Redirect to="/home/keys" />
            </Switch>
        </Container>
    )
}

export default withRouter(Home);
