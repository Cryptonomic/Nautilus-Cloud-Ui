import { Token, UserInfo, AppState, UserState } from "../../types";
import { Actions, AccessTokenTypeKeys, UserInfoTypeKeys } from "./types";
import { ActionTypeStates } from '../../models'

let initialTokenState: Token = {
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
      state = { ...state, ...initialTokenState };
      break;
    default:
      break;
  }
  return state;
};
/**
 * user
 */
let initialUserInfoState: UserState = {
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
      state = { ...state, ...initialUserInfoState };
      break;
    default:
      break;
  }
  return state;
};
