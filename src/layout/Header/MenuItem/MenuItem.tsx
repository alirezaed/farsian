import React, { ReactEventHandler } from 'react';
import classes from "./MenuItem.module.css";
import { Link } from 'react-router-dom';

interface MenuItemProps {
  to:string,
  title:string
}

export default function MenuItem({ to, title }:MenuItemProps) {

  return (
    <Link to={to} className={classes.menuItem}>
      {title}
    </Link>
  );
}
