import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import MenuItem from "./MenuItem/MenuItem";
import { Button, Switch } from "@mui/material";
import SwitchTheme from "./SwitchTheme";
import { useAuthentication } from "../../context/AuthenticationContext";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store/type";
import { logout } from "../../store/slice/authenticationSlice";

export default function Header() {
  const isLogin = useSelector<Store, boolean>(state=>state.auth.isLogin);
  const fullname = useSelector<Store, string>(state=>state.auth.fullname);
  
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout())
  };

  return (
    <div className={classes.header}>
      <div>
        {!isLogin && <MenuItem title="Sign In" to="/Signin" />}
        {isLogin && <Button onClick={handleLogOut}>Sign Out</Button>}
        {isLogin && <>{fullname}</>}
        <SwitchTheme />
      </div>
      <Logo />
      <div>
        {isLogin && <MenuItem title="All Orders" to="/AllOrders" />}
        <MenuItem title="Order" to="/" />
      </div>
    </div>
  );
}
