import React from 'react';
import classes from "./MenuItem.module.css";

interface MenuItemProps {
  to:string,
  title:string
}

export default function MenuItem({ to, title }:MenuItemProps) {
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState('', '', to);
  };

  return (
    <a onClick={handleClick} className={classes.menuItem}>
      {title}
    </a>
  );
}
