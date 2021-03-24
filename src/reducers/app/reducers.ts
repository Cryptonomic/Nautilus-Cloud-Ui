import { Token, UserState } from "../../types";
import { Actions, AccessTokenTypeKeys, UserInfoTypeKeys, PaymentState, PaymentActions } from "./types";
import { ActionTypeStates } from '../../models'

const initialTokenState: Token = {
  accessToken: null,
};
/**
 * token
 * @param state
 * @param action
 */
export const token = (
  state: Token = initialTokenState,
  action: Actions
): Token => {
  switch (action.type) {
    case AccessTokenTypeKeys.SET_ACCESS_TOKEN:
      state = { ...state, ...action.payload };
      break;
    case AccessTokenTypeKeys.REMOVE_ACCESS_TOKEN:
      state = { ...initialTokenState };
      break;
    default:
      break;
  }
  return state;
};
/**
 * user
 */
const initialUserInfoState: UserState = {
  status: ActionTypeStates.INPROGRESS,
	redirectTo: null,
	error: null,
  userInfo: null

};
export const userInfo = (
  state: UserState = initialUserInfoState,
  action: Actions
): UserState => {
  switch (action.type) {
    case UserInfoTypeKeys.SET_USER_INFO:
      state = { ...state, ...action.payload };
      break;
    case UserInfoTypeKeys.REMOVE_USER_INFO:
      state = { ...initialUserInfoState };
      break;
    default:
      break;
  }
  return state;
}

// Payment state

const initialPaymentState: PaymentState = {
  plans: [],
  activePlan: null,
  subscriptions: [],
  subscriptionsMap: {},
  invoices: [],
}

export const payment = (state: PaymentState = initialPaymentState, action: Actions) => {
  switch (action.type) {
    case PaymentActions.SET_PAYMENT_PLANS:
      return { ...state, plans: action.plans };
    case PaymentActions.SET_ACTIVE_PLAN:
      return { ...state, activePlan: action.activePlan };
    case PaymentActions.SET_SUBSCRIPTIONS:
      return { ...state, subscriptions: action.subscriptions, subscriptionsMap: action.subscriptionsMap };
    case PaymentActions.SET_INVOICES:
      return { ...state, invoices: action.invoices };
    case PaymentActions.RESET_PAYMENT:
      return { ...initialPaymentState };
    default:
      return state;
  }
};
