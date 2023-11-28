import { AnyAction, Reducer } from "redux";
import { AuthenticationStore } from "../type";

const initState: AuthenticationStore = {
  isLogin: false,
  fullname: "",
};

export function authenticationReducer(
  currentState: AuthenticationStore = initState,
  action?: AnyAction
): AuthenticationStore {
  return currentState;
}
