import axios from 'axios';

import http from '../../utils/httpService';

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
        const response = await http.get('https://dev1-nc2-01.cryptonomic-infra.tech/v1/api/subscriptions/stats');
        if (!response.data) {
            return null;
        }
        return response.data;
    } catch (e) {
        console.log('Get active plan error', e);
        throw Error('Get active plan error');
    }
};
