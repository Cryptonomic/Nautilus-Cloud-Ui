import axios from 'axios';

import http from '../../utils/httpService';
import { createItemsMap } from '../../utils/general';
import { Plan } from '../../types';
import { PaymentSubscriptionStatus } from './types';

export const getPlans = async () => {
    try {
        const response = await axios.get('https://dev1-nc2-01.cryptonomic-infra.tech/v1/api/plans');
        if (!response.data.length) {
            return [];
        }
        return response.data;
    } catch (e) {
        console.log('Get plans error', e);
        throw Error('Get plans error');
    }
};

export const getActivePlan = async () => {
    try {
        const response = await http.get(
            'https://dev1-nc2-01.cryptonomic-infra.tech/v1/api/subscriptions/stats'
        );
        if (!response.data) {
            return null;
        }
        return response.data;
    } catch (e) {
        console.log('Get active plan error', e);
        throw Error('Get active plan error');
    }
};

export const createSubscription = async () => {
    try {
        const response = await http.post(
            'https://dev1-nc2-01.cryptonomic-infra.tech/v1/api/subscriptions',
            {
                planId: 2,
            }
        );
        if (!response.data) {
            return null;
        }

        return response.data;
    } catch (e) {
        console.log('Set subscription error', e);
        throw Error('Set subscription error');
    }
};

export const getSubscription = async (id: number) => {
    try {
        const response = await http.get(
            `https://dev1-nc2-01.cryptonomic-infra.tech/v1/api/subscriptions/${id}`
        );
        if (!response.data) {
            return null;
        }
        return response.data;
    } catch (e) {
        console.log('Get subscription error', e);
        throw Error('Get subscription error');
    }
};

export const getAllSubscriptions = async () => {
    try {
        const response = await http.get(
            'https://dev1-nc2-01.cryptonomic-infra.tech/v1/api/subscriptions'
        );
        if (!response.data) {
            return null;
        }
        const subscriptions = response.data;
        const subsctiptionsMap = createItemsMap(subscriptions, 'subscriptionId');

        const subscriptionPro =
            subscriptions.filter(
                (s) =>
                    s.planId === Plan.Pro &&
                    (s.status === PaymentSubscriptionStatus.ACTIVE ||
                        s.status === PaymentSubscriptionStatus.CREATED)
            )[0] || null;

        return [subscriptions, subsctiptionsMap, subscriptionPro];
    } catch (e) {
        console.log('Get subscription error', e);
        throw Error('Get subscription error');
    }
};

export const getStripeConfig = async () => {
    try {
        const response = await http.get(
            'https://dev1-nc2-02.cryptonomic-infra.tech/v1/api/stripe/config/2'
        );
        if (!response.data) {
            return null;
        }
        return response.data;
    } catch (e) {
        console.log('Get stripe config error', e);
        throw Error('Get stripe config error');
    }
};

export const createInvoiceSession = async (subscriptionId: number) => {
    try {
        const response = await http.post(
            'https://dev1-nc2-02.cryptonomic-infra.tech/v1/api/invoices',
            {
                subscriptionId,
                method: 'stripe',
                currency: 'USD',
            }
        );

        if (!response.data) {
            return null;
        }
        return response.data;
    } catch (e) {
        console.log('Create invoice session error', e);
        throw Error('Create invoice session error');
    }
};

export const getInvoices = async () => {
    try {
        const response = await http.get(
            'https://dev1-nc2-02.cryptonomic-infra.tech/v1/api/invoices'
        );
        if (!response.data.length) {
            return [];
        }
        return response.data;
    } catch (e) {
        console.log('Get invoices error', e);
        throw Error('Get invoices error');
    }
};

export const getSession = async (sessionId: string) => {
    try {
        const response = await http.get(
            `https://dev1-nc2-02.cryptonomic-infra.tech/v1/api/stripe/checkout-session?sessionId=${sessionId}`
        );
        if (!response.data) {
            return null;
        }
        return response.data;
    } catch (e) {
        console.log('Get session error', e);
        throw Error('Get session error');
    }
};

export const getQueryRate = async (time?: string) => {
    const timeNow = new Date().getTime();
    let timestamp;

    switch (time) {
        case 'Last 30 Days':
            timestamp = timeNow - (1000*60*60*24*30);
            break;
        case 'Last 7 Days':
            timestamp = timeNow - (1000*60*60*24*7);
            break;
        default:
            timestamp = timeNow - (1000*60*60*24);
    }

    try {
        const response = await http.get(
            `https://dev1-nc2-03.cryptonomic-infra.tech/users/me/stats/aggregated?from=${timestamp}`
        );
        if (!response.data.length) {
            return null;
        }
        return response.data;
    } catch (e) {
        console.log('Get query rate error', e);
        throw Error('Get query rate error');
    }
}
