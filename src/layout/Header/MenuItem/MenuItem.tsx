import React, { ReactEventHandler } from 'react';
import classes from "./MenuItem.module.css";

interface MenuItemProps {
  to:string,
  title:string
}

export default function MenuItem({ to, title }:MenuItemProps) {
  
  const handleClick = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.history.pushState('', '', to);
  };

  return (
    <a onClick={handleClick} className={classes.menuItem}>
      {title}
    </a>
  );
}
