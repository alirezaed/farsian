import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { AuthenticationStore } from "../type";
import jwtDecode from "jwt-decode";

// export const login = (token: string): AnyAction => ({
//   type: "LOGIN",
//   payload: token,
// });

// export const logout = (): AnyAction => ({
//   type: "LOGOUT",
//   payload: "",
// });

const initState: AuthenticationStore = {
  isLogin: false,
  fullname: "",
};

const authnticationSlice = createSlice({
  initialState: initState,
  name: "auth",
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload);
      return {
        isLogin: true,
        fullname: (jwtDecode(action.payload) as { fullname: string }).fullname,
      };
    },
    logout() {
      localStorage.removeItem("token");
      return {
        isLogin: false,
        fullname: "",
      };
    },
  },
});

export const { login, logout } = authnticationSlice.actions;
export const reducer = authnticationSlice.reducer;
