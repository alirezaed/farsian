import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import classes from "./Layout.module.css";
import ToastMessage from "../components/ToastMessage/ToastMessage";

interface LayoutProps extends PropsWithChildren {}
export default function Layout({ children }: LayoutProps) {
  
  return (
    <div className={classes.container}>
      <Header />
      <ToastMessage />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
