import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, useLocation, useParams } from 'react-router-dom';

import { getSession } from '../../reducers/app/thunks';

import { Container, Title } from './style';

import Loader from '../../components/Loader';

const PaymentStatus: React.FC<RouteComponentProps> = (props) => {
    const history = useHistory();
    const location = useLocation();
    const [text, setText] = useState('');
    const params = new URLSearchParams(location.search);
    const sessionId = params.get('session_id');

    useEffect(() => {
        const start = async () => {
            if (location.pathname === '/canceled') {
                setText('Payment canceled');
                setTimeout(() => {
                    history.push('/home');
                }, 5000);
                return;
            }

            if (location.pathname === '/success' && sessionId) {
                const { status } = await getSession(sessionId);
                status === 'paid' && setText('Payment success');
                status === 'unpaid' && setText('Payment failed');
                setTimeout(() => {
                    history.push('/home');
                }, 5000);
                return
            }
            history.push('/home');
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
                    <div>Redirect...</div>
                </>
            )}
        </Container>
    );
};

export default PaymentStatus;
