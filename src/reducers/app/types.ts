import { Token, UserInfo, AppState, UserState } from "../../types";

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
  | IRemoveUserInfoAction;
