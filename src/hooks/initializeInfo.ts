import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import { UserInfo, UserState, Token, AppState } from "../types";
import { ActionTypeStates } from "../models";
import {
  setAccessToken,
  setUserInfo,
  removeAccessToken,
  removeUserInfo,
} from "../reducers/app/actions";

export default () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState<Token>({
    accessToken: localStorage.accessToken,
  });
  const store = useSelector((state: AppState) => state);
  useEffect(() => {
    if (token.accessToken) {
      const userInfo: UserInfo = jwt_decode(token.accessToken);
      const userState: UserState = {
        status: ActionTypeStates.SUCCESS,
        userInfo: userInfo,
      };
      dispatch(setAccessToken(token));
      dispatch(setUserInfo(userState));
    } else {
      if (store.token.accessToken) dispatch(removeAccessToken());
      if (store.user.userInfo) dispatch(removeUserInfo());
    }
  }, []);
};
