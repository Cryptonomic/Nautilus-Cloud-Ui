import { Token, UserState } from "../../types";
import { AccessTokenTypeKeys, UserInfoTypeKeys, PaymentPlan, PaymentActions, PaymentActivePlan } from "./types";

// Payment Actions

export const setPaymentPlans = (plans: PaymentPlan[] = []) => ({
  type: PaymentActions.SET_PAYMENT_PLANS,
  plans,
});

export const setActivePlan = (activePlan: PaymentActivePlan = null) => ({
  type: PaymentActions.SET_ACTIVE_PLAN,
  activePlan,
});

export const setAccessToken = (payload: Token) => {
  localStorage.setItem("accessToken", payload.accessToken);
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
