import { Token, UserState, AppState } from "../../types";
import { Actions, AccessTokenTypeKeys, UserInfoTypeKeys } from "./types";

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
