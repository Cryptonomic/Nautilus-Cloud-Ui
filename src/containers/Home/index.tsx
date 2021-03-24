import * as React from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    getPlans,
    getActivePlan,
    getAllSubscriptions,
    getInvoices,
} from '../../reducers/app/thunks';
import {
    setPaymentPlans,
    setActivePlan,
    setSubscriptions,
    setInvoices,
    resetPayment,
    removeAccessToken,
    removeUserInfo,
} from '../../reducers/app/actions';

import { Container, ContentWrapper, Wrapper } from './style';
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';
import Keys from './Keys';
import Account from './Account';
import { AppState } from '../../types';
import { Footer, FooterLine } from '../../components/Footer';

const Home = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state: AppState) => state.user.userInfo);
    const accessToken = useSelector((state: AppState) => state.token.accessToken);
    const history = useHistory();
    const location = useLocation();
    const drawerWidth = 184;

    const onLogout = () => {
        localStorage.removeItem('accessToken');
        dispatch(resetPayment());
        dispatch(removeAccessToken());
        dispatch(removeUserInfo());
        history.push('/');
    };

    const isRootPage = () => {
        return location.pathname === '/';
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const plans = await getPlans();
                dispatch(setPaymentPlans(plans));

                if (!accessToken) {
                    return;
                }

                const activePlan = await getActivePlan();
                dispatch(setActivePlan(activePlan));

                const [subscriptions, subscriptionsMap, subscriptionPro] = await getAllSubscriptions();
                dispatch(setSubscriptions(subscriptions, subscriptionsMap, subscriptionPro));

                const invoices = await getInvoices();
                dispatch(setInvoices(invoices));
            } catch (e) {}
        };
        fetchData();
    }, []);

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
                <Wrapper style={{ minHeight: 'calc(100% - 148px' }}>
                    <Switch>
                        <Route exact path="/home/keys">
                            <Keys onLogout={onLogout} userInfo={userInfo} />
                        </Route>
                        <Route exact path="/home/account">
                            <Account />
                        </Route>
                        <Redirect to={userInfo ? '/home/keys' : '/'} />
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
