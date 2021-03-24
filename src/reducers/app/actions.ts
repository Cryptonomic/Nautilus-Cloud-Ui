import { Token, UserState } from '../../types';
import {
    AccessTokenTypeKeys,
    UserInfoTypeKeys,
    PaymentPlan,
    PaymentActions,
    PaymentActivePlan,
    PaymentSubscription,
    PaymentInvoice,
} from './types';

// Payment Actions

export const setPaymentPlans = (plans: PaymentPlan[] = []) => ({
    type: PaymentActions.SET_PAYMENT_PLANS,
    plans,
});

export const setActivePlan = (activePlan: PaymentActivePlan = null) => ({
    type: PaymentActions.SET_ACTIVE_PLAN,
    activePlan,
});

export const setSubscriptions = (
    subscriptions: PaymentSubscription[] = [],
    subscriptionsMap: Record<string, PaymentSubscription> = {}
) => ({
    type: PaymentActions.SET_SUBSCRIPTIONS,
    subscriptions,
    subscriptionsMap,
});

export const setInvoices = (invoices: PaymentInvoice[] = []) => ({
    type: PaymentActions.SET_INVOICES,
    invoices,
});

export const resetPayment = () => {
    return { type: PaymentActions.RESET_PAYMENT };
};

export const setAccessToken = (payload: Token) => {
    localStorage.setItem('accessToken', payload.accessToken);
    return { type: AccessTokenTypeKeys.SET_ACCESS_TOKEN, payload };
};

export const removeAccessToken = () => {
    return { type: AccessTokenTypeKeys.REMOVE_ACCESS_TOKEN };
};

export const setUserInfo = (payload: UserState) => {
    return { type: UserInfoTypeKeys.SET_USER_INFO, payload };
};

export const removeUserInfo = () => {
    return { type: UserInfoTypeKeys.REMOVE_USER_INFO };
};
