import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setAccountActiveTab } from '../../reducers/app/actions';

import { getSession } from '../../reducers/app/thunks';

import { Container, Title } from './style';

import Loader from '../../components/Loader';

const PaymentStatus: React.FC<RouteComponentProps> = (props) => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const params = new URLSearchParams(location.search);
    const sessionId = params.get('session_id');

    useEffect(() => {
        const start = async () => {
            if (location.pathname === '/canceled') {
                setText('Payment canceled');
                setTimeout(() => {
                    dispatch(setAccountActiveTab(1));
                    history.push('home/account');
                }, 5000);
                return;
            }

            if (location.pathname === '/success' && sessionId) {
                const { status } = await getSession(sessionId);
                status === 'paid' && setText('Payment success');
                status === 'unpaid' && setText('Payment failed');
                setTimeout(() => {
                    dispatch(setAccountActiveTab(1));
                    history.push('home/account');
                }, 5000);
                return
            }
            dispatch(setAccountActiveTab(1));
            history.push('home/account');
        };
        start();
        return () => setText('');
    }, [location.pathname]);

    return (
        <Container>
            {!text && <Loader />}
            {text && (
                <>
                    <Title>{text}</Title>
                    <div>Redirecting...</div>
                </>
            )}
        </Container>
    );
};

export default PaymentStatus;
