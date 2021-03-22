import { Token, UserState, Plan } from "../../types";

// Payment types

export enum PaymentActions {
  SET_PAYMENT_PLANS = 'SET_PAYMENT_PLANS',
  SET_ACTIVE_PLAN = 'SET_ACTIVE_PLAN',
}

export interface PaymentPlan {
  id: number;
  name: Plan;
  price: number;
  publicDescription: string;
  type: string;
  numberOfRequests: number | null;
  lengthInDays: number;
  isDefault: boolean;
  startDate: string | null;
  endDate: string | null;
}

export interface PaymentActivePlan {
  planId: number;
  usedRequests: number;
  maxRequests: number | null;
  started: string;
  ends: string;
}

export interface PaymentState {
  plans: PaymentPlan[];
  activePlan: PaymentActivePlan | null;
}

export interface PaymentPlansAction {
  type: typeof PaymentActions.SET_PAYMENT_PLANS;
  plans: PaymentPlan[];
}

export interface PaymnetActivePlanAction {
  type: typeof PaymentActions.SET_ACTIVE_PLAN;
  activePlan: PaymentActivePlan;
}

/**
 * token
 */
export enum AccessTokenTypeKeys {
  SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN",
  REMOVE_ACCESS_TOKEN = "REMOVE_ACCESS_TOKEN",
}

export interface ISetAccessTokenAction {
  type: typeof AccessTokenTypeKeys.SET_ACCESS_TOKEN;
  payload: Token;
}

export interface IRemoveAccessTokenAction {
  type: typeof AccessTokenTypeKeys.REMOVE_ACCESS_TOKEN;
}

/**
 * userInfo
 */
export enum UserInfoTypeKeys {
  SET_USER_INFO = "SET_USER_INFO",
  REMOVE_USER_INFO = "REMOVE_USER_INFO",
}
export interface ISetUserInfoAction {
  type: typeof UserInfoTypeKeys.SET_USER_INFO;
  payload: UserState;
}
export interface IRemoveUserInfoAction {
  type: typeof UserInfoTypeKeys.REMOVE_USER_INFO;
}

export type Actions =
  | ISetAccessTokenAction
  | IRemoveAccessTokenAction
  | ISetUserInfoAction
  | IRemoveUserInfoAction
  | PaymentPlansAction
  | PaymnetActivePlanAction;
