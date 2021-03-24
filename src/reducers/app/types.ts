import { Token, UserState, Plan } from "../../types";

// Payment types

export enum PaymentActions {
  SET_PAYMENT_PLANS = 'SET_PAYMENT_PLANS',
  SET_ACTIVE_PLAN = 'SET_ACTIVE_PLAN',
  SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS',
  SET_INVOICES = 'SET_INVOICES',
  SET_ACCOUNT_ACTIVE_TAB = 'SET_ACCOUNT_ACTIVE_TAB',
  RESET_PAYMENT = 'RESET_PAYMENT',
}

export enum PaymentSubscriptionStatus {
  ACTIVE = 'SubscriptionActive',
  INACTIVE = 'SubscriptionDeactivated',
  CREATED = 'SubscriptionCreated',
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

export interface PaymentSubscription {
  subscriptionId: number;
  userId: number;
  planId: number;
  startDate: string;
  endDate: string;
  status: PaymentSubscriptionStatus;
}

export interface PaymentInvoice {
  invoiceId: number;
  userId: number;
  planId: number;
  subscriptionId: number;
  externalInvoiceId: string;
  method: string;
  status: string;
  timestamp: string;
  startDate: string;
  endDate: string;
  amount: number;
  currency: string;
  name: null;
  email: string;
  taxId: null;
  businessAddress: null;
  addressFrom: null;
  addressTo: null;
  url: string;
}

export interface PaymentState {
  plans: PaymentPlan[];
  activePlan: PaymentActivePlan | null;
  subscriptions: PaymentSubscription[];
  subscriptionsMap: Record<string, PaymentSubscription>;
  subscriptionPro: PaymentSubscription | null;
  invoices: PaymentInvoice[];
  accountActiveTab: number;
}

export interface AccountActiveTabAction {
  type: typeof PaymentActions.SET_ACCOUNT_ACTIVE_TAB;
  accountActiveTab: number;
}

export interface PaymentPlansAction {
  type: typeof PaymentActions.SET_PAYMENT_PLANS;
  plans: PaymentPlan[];
}

export interface PaymnetActivePlanAction {
  type: typeof PaymentActions.SET_ACTIVE_PLAN;
  activePlan: PaymentActivePlan;
}

export interface PaymentSubscriptionsAction {
  type: typeof PaymentActions.SET_SUBSCRIPTIONS;
  subscriptions: PaymentSubscription[];
  subscriptionsMap: Record<string, PaymentSubscription>;
  subscriptionPro: PaymentSubscription | null;
}

export interface PaymentInvoicesAction {
  type: typeof PaymentActions.SET_INVOICES;
  invoices: PaymentInvoice[];
}

export interface PaymentResetAction {
  type: typeof PaymentActions.RESET_PAYMENT;
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
  | PaymnetActivePlanAction
  | PaymentSubscriptionsAction
  | PaymentInvoicesAction
  | PaymentResetAction
  | AccountActiveTabAction;
