import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import MenuItem from "./MenuItem/MenuItem";
import { Button, Switch } from "@mui/material";
import SwitchTheme from "./SwitchTheme";
import { useAuthentication } from "../../context/AuthenticationContext";

export default function Header() {
  const { isLogin, fullname, logout } = useAuthentication();

  const handleLogOut = () => {
    logout();
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
