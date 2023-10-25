import React, { PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const AuthenticationContext = React.createContext({
  isLogin: false,
  fullname: '',
  login: (token: string) => {},
  logout: () => {},
});

export function AuthenticationContextProvider({ children }: PropsWithChildren) {
  const [isLogin, setIsLogin] = useState(false);
  const [fullname, setFullName] = useState("");
  const navigate = useNavigate();

  const login = (token: string) => {
    localStorage.setItem("token", token);
    var decoded = jwt_decode<{ fullname: string }>(token);
    setFullName(decoded.fullname);
    setIsLogin(true);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    setFullName("");
    navigate("/signin");
  };

  return (
    <AuthenticationContext.Provider
      value={{ isLogin, fullname, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
