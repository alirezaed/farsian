import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import classes from "./Layout.module.css";

interface LayoutProps extends PropsWithChildren {}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className={classes.container}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
