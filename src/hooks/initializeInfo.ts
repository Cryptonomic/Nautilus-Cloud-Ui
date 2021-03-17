import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import { UserInfo, UserState, AppState } from "../types";
import { ActionTypeStates } from "../models";
import {
  setAccessToken,
  setUserInfo,
  removeAccessToken,
  removeUserInfo,
} from "../reducers/app/actions";

export default () => {
  
  const dispatch = useDispatch();
  const store = useSelector((state: AppState) => state);
  useEffect(() => {
    if (localStorage.accessToken) {
      const userInfo: UserInfo = jwt_decode(localStorage.accessToken);
      const userState: UserState = {
        status: ActionTypeStates.SUCCESS,
        userInfo: userInfo,
      };
      dispatch(setAccessToken({accessToken: localStorage.accessToken}));
      dispatch(setUserInfo(userState));
    } else {
      if (store.token.accessToken) dispatch(removeAccessToken());
      if (store.user.userInfo) dispatch(removeUserInfo());
    }
  }, []);
};
